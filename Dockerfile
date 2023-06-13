FROM node:16.17.0-alpine3.15

RUN apk add --no-cache libc6-compat

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

WORKDIR /home/nextjs/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --omit=optional \
    && npx browserslist@latest --update-db \
    && npx next telemetry disable

# need to install linux specific swc builds
RUN yarn add @swc/cli @swc/core

COPY . .

RUN yarn run build

RUN addgroup -g 1001 -S nodejs \
    && adduser -S nextjs -u 1001 \
    && chown -R 1001:1001 /home/nextjs/app

USER nextjs

CMD [ "yarn", "start" ]

