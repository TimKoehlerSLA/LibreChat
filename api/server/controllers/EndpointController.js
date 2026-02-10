const { getEndpointsConfig, applyDapiEndpoints } = require('~/server/services/Config');

async function endpointController(req, res) {
  const baseEndpointsConfig = await getEndpointsConfig(req);
  const endpointsConfig = await applyDapiEndpoints(req, baseEndpointsConfig);
  res.send(JSON.stringify(endpointsConfig));
}

module.exports = endpointController;
