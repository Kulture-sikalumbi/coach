Azure deployment steps
=====================

1. Confirm your Azure App Service is Linux and runtime is set to Node 22 (you mentioned Node 22 LTS).

2. In the Azure Portal -> your Web App -> Overview -> Get publish profile. Download the publish profile (XML).

3. In your GitHub repo settings -> Secrets -> Actions, create a new secret named `AZURE_WEBAPP_PUBLISH_PROFILE` and paste the publish profile XML contents.

4. Edit `.github/workflows/azure-webapp.yml` and replace `REPLACE_WITH_YOUR_APP_NAME` with your App Service name.

5. The workflow will build the app and deploy on push to `main`. Push to `main` to trigger the deployment.

6. Startup command: the repo uses `start` script which runs `node server.js` and will respect the `PORT` env var. If you prefer, in Azure -> Configuration -> General settings -> Startup Command set `npm run start`.

7. Troubleshooting:
   - Check the Actions run logs in GitHub for build/deploy errors.
   - Check App Service logs (Log stream) in Azure for runtime errors.

Notes
-----
- The workflow uses the `azure/webapps-deploy@v2` action and expects the `AZURE_WEBAPP_PUBLISH_PROFILE` secret.
- If your App Service is Windows-based, the startup command should still be `npm run start` but ensure `server.js` works on that host.
