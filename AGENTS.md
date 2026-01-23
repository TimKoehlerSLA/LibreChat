# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Project Overview

LibreChat is a self-hosted, open-source alternative to ChatGPT that provides a unified interface for multiple AI endpoints (OpenAI, Claude, Google Gemini, AWS Bedrock, Azure, and more). It's a full-stack Node.js/React application using MongoDB for data storage.

## Build & Development Commands

```bash
# Install dependencies (use Node.js 20.x)
npm ci

# Build packages (required before running)
npm run build:data-provider   # Build @librechat/data-provider
npm run build:data-schemas    # Build @librechat/data-schemas
npm run build:api             # Build @librechat/api
npm run build:client-package  # Build @librechat/client
npm run frontend              # Full frontend build pipeline (builds all packages + client)

# Run development servers
npm run backend:dev           # Express backend with nodemon (port 3080)
npm run frontend:dev          # Vite dev server for React client

# Production
npm run backend               # Start production backend server
```

## Testing

```bash
# Unit tests
npm run test:api              # Backend tests (api/test/)
npm run test:client           # Frontend tests (client/test/)
npm run test:packages:api     # packages/api tests
npm run test:packages:data-provider
npm run test:packages:data-schemas
npm run test:all              # Run all unit tests

# E2E tests (requires MongoDB running locally)
npm run e2e                   # Playwright tests (e2e/)
npm run e2e:headed            # Run with browser visible
npm run e2e:debug             # Debug mode

# Linting
npm run lint                  # ESLint check
npm run lint:fix              # Auto-fix lint issues
npm run format                # Prettier formatting
```

## Architecture

### Monorepo Structure (npm workspaces)

```
/api                    # Express.js backend (JavaScript)
/client                 # React 18 frontend (TypeScript, Vite)
/packages/
  /api                  # Shared streaming, AI endpoint integrations, MCP, agents
  /data-provider        # React Query hooks, API client for frontend
  /data-schemas         # MongoDB schemas, Mongoose models, TypeScript types
  /client               # Shared React components
/config                 # CLI tools (user management, migrations)
/e2e                    # Playwright integration tests
```

### Backend (/api/server)

- **Routes** (`routes/`): Express route handlers (auth, convos, messages, agents, files, etc.)
- **Controllers** (`controllers/`): Request handling logic
- **Services** (`services/`): Business logic (Config/, Endpoints/, Files/, PermissionService, AuthService)
- **Middleware** (`middleware/`): Auth, validation, rate limiting, RBAC
- **Database**: MongoDB via Mongoose, models defined in `/packages/data-schemas`

### Frontend (/client/src)

- **Routes** (`routes/`): React Router configuration (ChatRoute, Dashboard, Search)
- **Components** (`components/`): 40+ directories (Chat/, Agents/, Messages/, Input/, etc.)
- **State**: Jotai atoms (`store/`) for client state, React Query for server state
- **Data fetching**: Via `@librechat/data-provider` (queries.ts, mutations.ts)
- **Styling**: TailwindCSS

### Key Data Flow

1. React components use React Query hooks from `@librechat/data-provider`
2. Requests go to Express routes in `/api/server/routes/`
3. Routes use middleware for auth/validation, then call controllers
4. Controllers use services for business logic
5. Services interact with MongoDB via models from `@librechat/data-schemas`
6. AI responses stream via SSE (Server-Sent Events)

### AI Provider Integration

The `/packages/api/src/endpoints/` directory contains integrations for:
- OpenAI, Azure OpenAI
- Anthropic (Claude)
- Google Gemini
- AWS Bedrock
- Custom OpenAI-compatible endpoints

## Conventions

### Commit Messages

Use semantic commit format: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`

```
feat: add new feature
fix: resolve bug in authentication
```

### Branch Naming

Use descriptive slash-based names: `new/feature/x`, `fix/issue/y`

### Import Order (enforced by ESLint)

1. npm packages (longest to shortest)
2. TypeScript types
3. Local imports (use `~` alias for workspace root)

### File Naming

- React components: PascalCase (`MyComponent.tsx`)
- Utilities: camelCase (`helperFunction.ts`)
- Tests: `.spec.js` or `.test.js`

## Configuration

- **Environment**: Copy `.env.example` to `.env`
- **App config**: Copy `librechat.example.yaml` to `librechat.yaml`
- Supports OAuth2, LDAP, SAML for authentication
- File storage: local, S3, or Firebase

## Key Dependencies

- **Backend**: Express 5, Mongoose 8, Passport.js, OpenAI/Anthropic/Google SDKs
- **Frontend**: React 18, Vite 6, TailwindCSS 3, React Query 4, Jotai, Radix UI
- **Testing**: Jest, Playwright, React Testing Library
