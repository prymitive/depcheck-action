FROM node:14.17.0-alpine
RUN mkdir -p /depcheck
COPY package.json package-lock.json /depcheck/
RUN apk add make python build-base
RUN cd /depcheck && npm install
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
