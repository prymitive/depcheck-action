FROM ghcr.io/prymitive/depcheck-action:v1.4.1
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
