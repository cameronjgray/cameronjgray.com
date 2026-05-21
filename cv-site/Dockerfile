FROM joseluisq/static-web-server:2-alpine

# Drop to a non-root, non-privileged user
USER 65534:65534
COPY --chown=65534:65534 ./public  /public
COPY --chown=65534:65534 ./config.toml /config.toml

EXPOSE 8080

CMD ["--config-file", "/config.toml"]
