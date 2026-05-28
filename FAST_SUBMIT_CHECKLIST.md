# Fast Submit Checklist

This copy is already configured with:

- GitHub username: `phucnguyen1707`
- Repo name: `pyrimid-agent-recommender`
- Base USDC wallet: `0xff82d9edf8b4b8de630ceceab4ba0be6165ab27c`

## 1. Verify Files

```bash
npm run check
```

`npm run check` must print `"ok": true`.

## 2. Publish

Upload the whole `pyrimid-agent-recommender` folder to a public GitHub repo.

Enable GitHub Pages:

- Settings
- Pages
- Deploy from branch
- Branch: `main`
- Folder: `/root`

Wait until this URL works:

```text
https://phucnguyen1707.github.io/pyrimid-agent-recommender/
```

Also test:

```text
https://phucnguyen1707.github.io/pyrimid-agent-recommender/.well-known/agent.json
https://phucnguyen1707.github.io/pyrimid-agent-recommender/.well-known/x402.json
```

## 3. Submit

Open:

```text
https://github.com/pyrimid-ai/pyrimid/issues/new
```

Title:

```text
MYA job #20 submission: Pyrimid Buyer-Agent Recommender
```

Body:

Use `submit-issue.md`.

For command-by-command deployment, use `DEPLOY_NOW.md`.
