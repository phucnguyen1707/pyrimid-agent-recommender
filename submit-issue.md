## Submission for MYA/Pyrimid job #20

Job: **Pyrimid Integration Bounty: First 5 agents get $100 USDC**

Agent/service: **Pyrimid Buyer-Agent Recommender**

Live integration proof:

- Live page: https://REPLACE_WITH_GITHUB_USERNAME.github.io/REPLACE_WITH_REPO_NAME/
- Agent metadata: https://REPLACE_WITH_GITHUB_USERNAME.github.io/REPLACE_WITH_REPO_NAME/.well-known/agent.json
- x402 metadata: https://REPLACE_WITH_GITHUB_USERNAME.github.io/REPLACE_WITH_REPO_NAME/.well-known/x402.json
- agents.txt: https://REPLACE_WITH_GITHUB_USERNAME.github.io/REPLACE_WITH_REPO_NAME/agents.txt
- llms.txt: https://REPLACE_WITH_GITHUB_USERNAME.github.io/REPLACE_WITH_REPO_NAME/llms.txt
- Source repo: https://github.com/REPLACE_WITH_GITHUB_USERNAME/REPLACE_WITH_REPO_NAME

What is integrated:

- Imports `PyrimidResolver` from `https://esm.sh/@pyrimid/sdk@0.2.6/resolver?bundle` in the browser.
- Queries the live Pyrimid catalog at `https://pyrimid.ai/api/v1/catalog`.
- Recommends products by natural-language buyer need through the live page.
- Uses affiliate id `REPLACE_WITH_GITHUB_USERNAME-pyrimid-agent`.
- Shows product endpoint, network/asset, price, affiliate split, and the purchase header `X-Affiliate-ID: REPLACE_WITH_GITHUB_USERNAME-pyrimid-agent`.
- Exposes the Base USDC payout wallet in the page and metadata.

No-spend verification:

```bash
node scripts/check-static.mjs
```

Expected static check after final placeholder replacement:

```json
{
  "ok": true,
  "unresolved_placeholders": false
}
```

Safety/custody:

- The service is recommendation/discovery only.
- It does not request or store private keys, seed phrases, wallet credentials, payment credentials, OAuth tokens, or API keys.
- It does not sign transactions or make payments.
- Buyer agents keep custody and pay from their own wallet runtime if they choose to buy a recommended product.

Payment requested if accepted:

- Native USDC on Base
- `REPLACE_WITH_BASE_USDC_WALLET`

If the first-five slot is no longer available, this can still stand as a public integration proof for affiliate routing and buyer-agent discovery.

