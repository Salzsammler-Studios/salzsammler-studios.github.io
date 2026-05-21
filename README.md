# Salzsammler Studios

Website for Salzsammler Studios, built with [Astro](https://astro.build) + [Preact](https://preactjs.com) and statically deployed to netcup via FTP.

## Development

```sh
npm install
npm run dev      # start dev server at localhost:4321
npm run build    # build to ./dist/
npm run preview  # preview the build locally
```

## Deployment

Deployment is handled by the GitHub Actions workflow (`.github/workflows/main.yml`). It must be triggered **manually** from the Actions tab in GitHub — it will not run automatically on push.

The workflow builds the project and uploads `./dist/` to the netcup server via FTP. The FTP credentials are stored as GitHub repository secrets (`FTP_USERNAME`, `FTP_PASSWORD`).

## Branch structure

- `new-website-v2` — main development branch
- `gh-pages` — legacy, no longer used
