const { z } = require('zod');
const { ProxyAgent, fetch } = require('undici');
const { Tool } = require('@langchain/core/tools');
const { getEnvironmentVariable } = require('@langchain/core/utils/env');

class FirecrawlScrape extends Tool {
  static lc_name() {
    return 'FirecrawlScrape';
  }

  constructor(fields = {}) {
    super(fields);
    this.envVar = 'FIRECRAWL_API_KEY';
    this.override = fields.override ?? false;
    this.apiKey = fields[this.envVar] ?? getEnvironmentVariable(this.envVar) ?? '';

    this.apiUrl = fields.FIRECRAWL_API_URL
      ?? getEnvironmentVariable('FIRECRAWL_API_URL')
      ?? 'https://api.firecrawl.dev';

    this.name = 'firecrawl_scrape';
    this.description =
      'Scrape a webpage and extract its content as markdown, HTML, or other formats. Useful for reading the full content of a specific URL.';

    this.schema = z.object({
      url: z.string().url().describe('The URL of the webpage to scrape.'),
      formats: z
        .array(z.enum(['markdown', 'html', 'rawHtml', 'links', 'screenshot']))
        .optional()
        .describe('Output formats to return. Defaults to ["markdown"].'),
      onlyMainContent: z
        .boolean()
        .optional()
        .describe('Extract only the main content, filtering out navigation, footers, etc. Defaults to true.'),
      waitFor: z
        .number()
        .optional()
        .describe('Milliseconds to wait before scraping, useful for pages with dynamic content.'),
      mobile: z
        .boolean()
        .optional()
        .describe('Use a mobile user agent for scraping.'),
      timeout: z
        .number()
        .optional()
        .describe('Timeout in milliseconds for the scrape request.'),
    });
  }

  async _call(input) {
    const validationResult = this.schema.safeParse(input);
    if (!validationResult.success) {
      throw new Error(`Validation failed: ${JSON.stringify(validationResult.error.issues)}`);
    }

    const { url, ...options } = validationResult.data;

    const requestBody = { url, ...options };

    const headers = { 'Content-Type': 'application/json' };
    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    const fetchOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
    };

    if (process.env.PROXY) {
      fetchOptions.dispatcher = new ProxyAgent(process.env.PROXY);
    }

    const response = await fetch(`${this.apiUrl.replace(/\/+$/, '')}/v1/scrape`, fetchOptions);

    const json = await response.json();
    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}: ${json?.error || JSON.stringify(json)}`,
      );
    }

    return JSON.stringify(json);
  }
}

module.exports = FirecrawlScrape;
