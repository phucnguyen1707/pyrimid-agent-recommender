import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const files = [
  "index.html",
  ".well-known/agent.json",
  ".well-known/x402.json",
  "agents.txt",
  "llms.txt",
  "README.md",
  "submit-issue.md",
];

const required = [
  "@pyrimid/sdk@0.2.6",
  "PyrimidResolver",
  "https://pyrimid.ai/api/v1/catalog",
  "X-Affiliate-ID",
  "Base USDC",
];

const placeholders = [
  "REPLACE_WITH_GITHUB_USERNAME",
  "REPLACE_WITH_REPO_NAME",
  "REPLACE_WITH_BASE_USDC_WALLET",
];

const text = files
  .map((file) => readFileSync(join(root, file), "utf8"))
  .join("\n");

const missing = required.filter((term) => !text.includes(term));
const unresolvedPlaceholders = placeholders.filter((term) => text.includes(term));

const walletMatch = text.match(/0x[a-fA-F0-9]{40}/);

const result = {
  ok: missing.length === 0 && unresolvedPlaceholders.length === 0 && Boolean(walletMatch),
  unresolved_placeholders: unresolvedPlaceholders.length > 0,
  missing_terms: missing,
  wallet_detected: walletMatch ? walletMatch[0] : null,
  checked_files: files.length,
};

console.log(JSON.stringify(result, null, 2));

if (!result.ok) {
  process.exitCode = 1;
}

