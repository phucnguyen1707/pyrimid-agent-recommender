# Deploy Now

Current blocker:

- Need your GitHub username.
- Need your Base USDC/EVM payout wallet.

## Step 1: Configure

Run from this folder:

```bash
npm run configure -- --github YOUR_GITHUB_USERNAME --repo pyrimid-agent-recommender --wallet 0xYOUR_BASE_USDC_WALLET
npm run check
```

`npm run check` must print `"ok": true`.

## Step 2A: Upload With GitHub Website

Use this if the machine does not have `gh` installed.

1. Create a public repo named `pyrimid-agent-recommender`.
2. Upload every file from this folder, including:
   - `.nojekyll`
   - `.well-known/agent.json`
   - `.well-known/x402.json`
   - `index.html`
   - `agents.txt`
   - `llms.txt`
   - `README.md`
   - `package.json`
   - `scripts/check-static.mjs`
   - `scripts/configure.mjs`
   - `submit-issue.md`
3. In repo Settings -> Pages:
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/root`

## Step 2B: Push With Git

Use this if you created the GitHub repo and have git credentials ready:

```bash
git add .
git commit -m "Configure Pyrimid recommender metadata"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/pyrimid-agent-recommender.git
git push -u origin main
```

If `git remote add` says the remote already exists:

```bash
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/pyrimid-agent-recommender.git
git push -u origin main
```

## Step 3: Test Live URLs

```text
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/.well-known/agent.json
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/.well-known/x402.json
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/agents.txt
https://YOUR_GITHUB_USERNAME.github.io/pyrimid-agent-recommender/llms.txt
```

## Step 4: Submit

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

