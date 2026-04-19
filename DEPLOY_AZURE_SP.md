Azure deployment using a Service Principal (GitHub Actions)
=========================================================

1) Create a service principal scoped to your Web App (one-liner):

```bash
az ad sp create-for-rbac --name "github-actions-sp-<app>" \
  --role Contributor \
  --scopes /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP>/providers/Microsoft.Web/sites/<APP_NAME> \
  --sdk-auth
```

Copy the returned JSON (or note the `appId`/`tenant`/`subscriptionId`).

2) In your GitHub repo, add these Secrets (Settings → Secrets → Actions):
- `AZURE_CLIENT_ID` → the service principal `appId`
- `AZURE_TENANT_ID` → the tenant id
- `AZURE_SUBSCRIPTION_ID` → subscription id
- `AZURE_WEBAPP_NAME` → your App Service name

3) Push to `main` — the workflow `.github/workflows/azure-sp-deploy.yml` will:
- Build the Next app with `npm run build` on an Actions runner
- Package `.next`, `package.json`, lockfile, and `public` into an artifact
- Install production deps in the deploy job and deploy the packaged app to the App Service

Notes & debugging:
- If deployment fails, check the Actions run logs (build and deploy jobs). They show `ls` and validation steps.
- If Azure returns permission errors, ensure the SP has the right role and scope (resource-level contributor is recommended).
- For OIDC (no stored secrets) you can instead create a federated credential on the App Registration and call `azure/login` with `enable-oidc: true`.
