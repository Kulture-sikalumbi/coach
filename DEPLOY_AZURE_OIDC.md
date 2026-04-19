Azure deployment using GitHub OIDC (no long-lived secrets)
=========================================================

Overview
--------
This setup uses GitHub Actions OIDC to let the workflow request short-lived Azure tokens. No publish-profile or service-principal secrets need to be stored in the repo.

One-time Azure steps
--------------------
1. Create an App Registration in Azure AD (Portal → Azure Active Directory → App registrations → New registration).
   - Note the Application (client) ID and Tenant ID.

2. Add a Federated Credential on the App Registration:
   - In the App Registration, go to **Certificates & secrets** → **Federated credentials** → **Add credential**.
   - Issuer: `https://token.actions.githubusercontent.com`
   - Subject: `repo:<ORG>/<REPO>:ref:refs/heads/main` (restrict to your repo and branch)
   - Audience: `api://AzureADTokenExchange`

3. Grant the App Registration a role on the Web App resource (scope to only the App):

```bash
az role assignment create --assignee <APP_CLIENT_ID> --role Contributor \
  --scope /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP>/providers/Microsoft.Web/sites/<APP_NAME>
```

GitHub setup (repo variables)
-----------------------------
Create repository VARIABLES (Repo → Settings → Variables → Actions)
- `AZURE_CLIENT_ID` — the App (client) ID (not a secret)
- `AZURE_TENANT_ID` — the Tenant ID
- `AZURE_SUBSCRIPTION_ID` — your subscription id
- `AZURE_WEBAPP_NAME` — the App Service name

Why variables not secrets: these are non-sensitive identifiers. The federated credential is the secure binding that authorizes GitHub Actions to request tokens.

Workflow
--------
Use the included `.github/workflows/azure-oidc-deploy.yml`. It:
- Builds the Next app on Actions
- Packages the build into an artifact
- Uses `azure/login` with `enable-oidc: true` to request a short-lived token
- Deploys with `azure/webapps-deploy`

Testing
-------
- Push to `main` and monitor the Actions run logs. The `Azure Login (OIDC)` step should show a successful login without requiring any secret.
- If login fails: confirm the Federated Credential Subject exactly matches the repo (owner/name) and branch, and confirm the role assignment scope is correct.
