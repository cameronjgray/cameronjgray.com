FROM node:22-alpine AS compress
WORKDIR /work
COPY public ./public
COPY tools  ./tools
RUN find public -name '*.br' -o -name '*.gz' -delete \
 && node tools/compress.js
FROM joseluisq/static-web-server:2-alpine
USER 65534:65534
COPY --from=compress --chown=65534:65534 /work/public /public
COPY              --chown=65534:65534 ./config.toml  /config.toml
EXPOSE 8080

CMD ["--config-file", "/config.toml"]
