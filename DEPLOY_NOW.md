# Deploy Now

Ready values:

- GitHub username: `phucnguyen1707`
- Repo name: `pyrimid-agent-recommender`
- Base USDC wallet: `0xff82d9edf8b4b8de630ceceab4ba0be6165ab27c`

## Step 1: Verify

Run from this folder:

```bash
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
git remote add origin https://github.com/phucnguyen1707/pyrimid-agent-recommender.git
git push -u origin main
```

If `git remote add` says the remote already exists:

```bash
git remote set-url origin https://github.com/phucnguyen1707/pyrimid-agent-recommender.git
git push -u origin main
```

## Step 3: Test Live URLs

```text
https://phucnguyen1707.github.io/pyrimid-agent-recommender/
https://phucnguyen1707.github.io/pyrimid-agent-recommender/.well-known/agent.json
https://phucnguyen1707.github.io/pyrimid-agent-recommender/.well-known/x402.json
https://phucnguyen1707.github.io/pyrimid-agent-recommender/agents.txt
https://phucnguyen1707.github.io/pyrimid-agent-recommender/llms.txt
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
