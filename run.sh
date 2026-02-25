#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed. Please install Node.js (which includes npm) and try again."
  exit 1
fi

echo "Installing dependencies..."
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

if [ "${SKIP_AUDIT:-0}" != "1" ]; then
  echo "Applying security fixes (npm audit fix)..."
  npm audit fix || true
fi

echo "Starting React app..."
npm run dev -- --host
