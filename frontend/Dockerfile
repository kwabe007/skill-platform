FROM node:22.17.0-alpine AS base

RUN corepack enable pnpm


# Install dependencies
FROM base AS deps

WORKDIR /app
COPY package.json pnpm-lock.yaml* ./

RUN pnpm i --frozen-lockfile


# Build source
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

# Production image
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactrouter

COPY --from=builder --chown=reactrouter:nodejs /app/build ./build
COPY --from=builder --chown=reactrouter:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=reactrouter:nodejs /app/package.json ./

USER reactrouter

EXPOSE 3000

CMD ["npm", "run", "start"]