FROM ghcr.io/prymitive/depcheck-action:v1.4.2
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
