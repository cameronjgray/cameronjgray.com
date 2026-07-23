#!/usr/bin/env bash
set -euo pipefail

# Build + release the PROD instance from a clean checkout.
# Usage: ./release.sh [git-ref]   (default: main)

cd "$(dirname "$0")"
REF="${1:-main}"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "✗ Working tree is dirty. Commit or stash before releasing." >&2
  exit 1
fi

git fetch origin
git checkout "$REF"
git merge --ff-only "origin/$REF" 2>/dev/null || echo "  (no upstream ff for $REF; using local)"

SHA="$(git rev-parse --short HEAD)"
echo "→ Building cameronjgray.com:${SHA}"
docker build -t "cameronjgray.com:${SHA}" -t cameronjgray.com:prod .

docker compose up -d prod              # only recreates prod, leaves dev alone

echo -n "→ Waiting for health "
for _ in $(seq 1 20); do
  s="$(docker inspect -f '{{.State.Health.Status}}' cameronjgray.com 2>/dev/null || echo starting)"
  [[ "$s" == "healthy" ]] && break
  echo -n "."; sleep 2
done
echo
docker compose ps
echo "✓ Released cameronjgray.com:${SHA} (tagged :prod)  → 127.0.0.1:8080"
