FROM ghcr.io/prymitive/depcheck-action:v1.0.14
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
