# Fast Submit Checklist

Use this only after you have:

- GitHub username
- Public repo name
- Base USDC/EVM wallet address

## 1. Configure Files

```bash
npm run configure -- --github YOUR_GITHUB_USERNAME --repo pyrimid-agent-recommender --wallet 0xYOUR_BASE_USDC_WALLET
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
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/
```

Also test:

```text
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/.well-known/agent.json
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/.well-known/x402.json
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
