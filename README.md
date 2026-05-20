# SvelteKit Template

Starter template for building SvelteKit apps inside a VS Code devcontainer.

## Stack

- SvelteKit + Svelte 5 runes
- shadcn-svelte
- Tailwind CSS v4 with `forms` and `typography`
- ESLint + Prettier
- JavaScript project setup
- VS Code devcontainer with Node.js 24

## Usage

Create a new project from this template:

```sh
git clone --depth=1 https://github.com/GeoGeorgeous/template.git new-app
cd new-app
```

If you do not have local Git installed, use Docker once to fetch the template:

```sh
docker run --rm -v "$PWD":/app -w /app alpine/git \
  clone --depth=1 https://github.com/GeoGeorgeous/template.git new-app
cd new-app
```

Then initialize your own repository:

```sh
rm -rf .git
git init
git add .
git commit -m "initial commit"
```

Open the project in VS Code and reopen it in the devcontainer.

## Create Your GitHub Repo

After the initial commit, create a new empty repository on GitHub and connect it.

If you use the GitHub website, create an empty repo without a README, then run:

```sh
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

If you use GitHub CLI (`gh`), you can do it without the website:

```sh
gh repo create YOUR_REPO --private --source=. --remote=origin --push
```

SSH keys let you push to GitHub, but they do not create repositories by themselves. To create a repo without the website, use GitHub CLI or the GitHub API with a personal access token.

## Development

```sh
npm install
npm run dev
```

Dev server: `http://localhost:3400`

## Scripts

```sh
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run format
npm run shadcn-update
```

## Structure

```text
src/
  app.html
  app.css
  lib/
    assets/
    components/ui/
    hooks/
    server/
    state/
    utils.js
  routes/
```

## Clean Reset

```sh
rm -rf .svelte-kit node_modules
npm install
```
