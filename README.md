# MyBrighture Landing

Landing page project built with React and Vite.

## Setup

### Prerequisites

- Node.js 18+ (npm included)

### Run with `run.sh`

From the project root:

```bash
chmod +x run.sh
./run.sh
```

The script will:

1. Check that `npm` is installed.
2. Install dependencies using `npm ci` when `package-lock.json` exists.
3. Run `npm audit fix` to patch known vulnerabilities when possible.
4. Start the Vite development server on your local network (`--host`).

### Optional flags

Skip automatic vulnerability patching:

```bash
SKIP_AUDIT=1 ./run.sh
```
