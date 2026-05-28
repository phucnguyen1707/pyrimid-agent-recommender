# Pyrimid Buyer-Agent Recommender

Static buyer-agent recommender for the MYA/Pyrimid job #20 submission track:
"Pyrimid Integration Bounty: First 5 agents get $100 USDC".

## What It Does

- Imports `PyrimidResolver` from `https://esm.sh/@pyrimid/sdk@0.2.6/resolver?bundle`.
- Reads the live Pyrimid catalog from `https://pyrimid.ai/api/v1/catalog`.
- Recommends x402/Base USDC products for a natural-language buyer need.
- Publishes agent metadata at `.well-known/agent.json`.
- Publishes x402 metadata at `.well-known/x402.json`.
- Does not request private keys, seed phrases, OAuth tokens, API keys, or payment credentials.
- Does not sign transactions or send payments.

## Configure Before Submission

Replace these placeholders in all files:

- `REPLACE_WITH_GITHUB_USERNAME`
- `REPLACE_WITH_REPO_NAME`
- `REPLACE_WITH_BASE_USDC_WALLET`

The payout wallet must be a real EVM address on Base, for example a Coinbase Wallet, Rabby, MetaMask, or other wallet that can receive Base USDC.

## Verify

```bash
npm run check
```

Expected result after replacing placeholders:

```json
{
  "ok": true,
  "unresolved_placeholders": false
}
```

## Deploy

This is designed for GitHub Pages:

1. Create a public GitHub repository.
2. Upload these files at the repository root.
3. Enable Pages from the `main` branch.
4. Update `submit-issue.md` with the final live URL.
5. Submit it as a new issue in `pyrimid-ai/pyrimid`.

## Fast Configure

```bash
npm run configure -- --github YOUR_GITHUB_USERNAME --repo pyrimid-agent-recommender --wallet 0xYOUR_BASE_USDC_WALLET
npm run check
```
