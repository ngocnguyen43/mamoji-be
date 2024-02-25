FROM node:18-alpine as build

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

COPY . .

RUN npm ci && npm i
RUN npm run build

USER node

FROM node:18-alpine as prod

WORKDIR /app
RUN wget -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub && \
    echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories && \
    apk add doppler

ARG DOPPLER_TOKEN--chown=node:node 

ENV NODE_ENV production
ENV DOPPLER_TOKEN ${DOPPLER_TOKEN}
ENV TZ Asia/Ho_Chi_Minh

COPY --chown=node:node --from=build /app/dist dist
COPY --chown=node:node --from=build /app/node_modules node_modules

USER node

CMD ["doppler","run","--","node", "dist/main.js"]
