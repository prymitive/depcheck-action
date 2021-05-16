FROM ghcr.io/prymitive/depcheck-action
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
