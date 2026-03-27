# ---------------------------
# 1. BASE — COMMON
# ---------------------------
FROM node:20-slim AS base
WORKDIR /app

# ---------------------------
# 2. DEPENDENCIES LAYER
# ---------------------------
FROM base AS deps
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
    if [ -f package-lock.json ]; then npm ci; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
    else npm install; \
    fi

# ---------------------------
# 3. BUILDER (BUILD NEXTJS)
# ---------------------------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV EMAILJS_SERVICE_ID=service_3m0516o
ENV EMAILJS_TEMPLATE_ID=template_iflzdou
ENV EMAILJS_PUBLIC_KEY=CIYYNSRVLNEpT2Eoi
RUN npm run build

# ---------------------------
# 4. RUNNER (PRODUCTION)
# ---------------------------
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8000
EXPOSE 8000

# Tạo user không có quyền root (an toàn)
RUN addgroup --system nodejs && adduser --system nextjs --ingroup nodejs

# Copy file standalone build để chạy nhẹ nhất
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

CMD ["node", "server.js"]
