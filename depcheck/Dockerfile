FROM node:16.13.1-alpine
RUN mkdir -p /depcheck
COPY package.json package-lock.json /depcheck/
RUN apk add make python3 build-base
RUN cd /depcheck && npm install
LABEL org.opencontainers.image.source https://github.com/prymitive/depcheck-action
