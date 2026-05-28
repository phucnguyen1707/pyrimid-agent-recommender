import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) {
  args.set(process.argv[i], process.argv[i + 1]);
}

const github = args.get("--github");
const repo = args.get("--repo") || "pyrimid-agent-recommender";
const wallet = args.get("--wallet");

if (!github || !wallet || args.has("--help")) {
  console.log(
    [
      "Usage:",
      "  node scripts/configure.mjs --github YOUR_GITHUB_USERNAME --repo pyrimid-agent-recommender --wallet 0xYOUR_BASE_USDC_WALLET",
      "",
      "Example:",
      "  node scripts/configure.mjs --github alice --repo pyrimid-agent-recommender --wallet 0x1234567890abcdef1234567890abcdef12345678",
    ].join("\n")
  );
  process.exit(github || wallet ? 1 : 0);
}

if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(github)) {
  throw new Error("Invalid GitHub username.");
}

if (!/^[a-zA-Z0-9._-]{1,100}$/.test(repo)) {
  throw new Error("Invalid repository name.");
}

if (!/^0x[a-fA-F0-9]{40}$/.test(wallet)) {
  throw new Error("Wallet must be a 42-character EVM address starting with 0x.");
}

const files = [
  "README.md",
  "index.html",
  ".well-known/agent.json",
  ".well-known/x402.json",
  "agents.txt",
  "llms.txt",
  "submit-issue.md",
];

const replacements = new Map([
  ["REPLACE_WITH_GITHUB_USERNAME", github],
  ["REPLACE_WITH_REPO_NAME", repo],
  ["REPLACE_WITH_BASE_USDC_WALLET", wallet],
]);

for (const file of files) {
  const path = join(root, file);
  let text = readFileSync(path, "utf8");
  for (const [from, to] of replacements) {
    text = text.replaceAll(from, to);
  }
  writeFileSync(path, text);
}

console.log(
  JSON.stringify(
    {
      ok: true,
      github,
      repo,
      wallet,
      live_page: `https://${github}.github.io/${repo}/`,
      submit_issue_file: "submit-issue.md",
    },
    null,
    2
  )
);

