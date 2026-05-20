Use this repository as a SvelteKit starter for work done inside a VS Code devcontainer.

Prefer existing project conventions over generic framework defaults.

Rules:

- use SvelteKit and Svelte 5 runes
- use shadcn-svelte, not shadcn/ui for React
- add generated shadcn-svelte components only under `src/lib/components/ui`
- keep custom reusable app components outside `src/lib/components/ui`
- prefer `src/lib/components/app`, `src/lib/components/layout`, and `src/lib/components/sections` for project-owned components
- use `src/app.css` as the main Tailwind and theme entrypoint
- use aliases from `svelte.config.js` such as `$components`, `$hooks`, `$server`, `$state`, and `$utils`
- use the existing `cn()` helper from `src/lib/utils.js`
- preserve JavaScript project setup; do not migrate to TypeScript unless explicitly requested
- prefer minimal, reusable sections and layout primitives over page-specific duplication
- when adding UI, reuse installed shadcn-svelte components before creating custom low-level primitives
- keep edits compatible with `npm run lint` and `npm run build`
- do not introduce deployment-specific infrastructure unless explicitly requested

When asked for new reusable UI, prefer this split:

- `src/lib/components/ui` for shadcn-svelte generated components
- `src/lib/components/layout` for shells, nav, header, footer
- `src/lib/components/sections` for hero, content blocks, landing sections
- `src/lib/components/app` for project-specific reusable building blocks

If a request looks like it came from React shadcn/ui docs, translate it to shadcn-svelte APIs and file structure instead of copying React patterns.
