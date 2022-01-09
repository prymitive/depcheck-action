FROM ghcr.io/prymitive/depcheck-action:v1.4.3
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
