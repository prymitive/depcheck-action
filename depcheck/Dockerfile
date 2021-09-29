FROM node:14.18.0-alpine
RUN mkdir -p /depcheck
COPY package.json package-lock.json /depcheck/
RUN apk add make python build-base
RUN cd /depcheck && npm install
LABEL org.opencontainers.image.source https://github.com/prymitive/depcheck-action
