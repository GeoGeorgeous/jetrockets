<script>
  import { Button } from '$components/ui/button/index.js';
  import { base } from '$app/paths';
  import * as Card from '$components/ui/card/index.js';
  import { Separator } from '$components/ui/separator/index.js';
</script>

<!-- Hero -->
<div class="section-wrapper border-b">
  <section class="section py-10">
    <p class="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
      SvelteKit Template
    </p>

    <h1 class="text-2xl font-semibold">Production-ready SvelteKit + devcontainer setup</h1>

    <p class="mt-2 max-w-xl text-base text-muted-foreground">
      Svelte 5 runes, shadcn-svelte, Tailwind v4, and a fully configured VS Code devcontainer with
      Node 24. Clone, open, and start building immediately.
    </p>

    <div class="mt-5 flex gap-2">
      <Button href={base + '/showcase'}>Showcase</Button>
      <Button href="https://github.com/GeoGeorgeous/template" variant="outline" target="_blank">
        GitHub
      </Button>
    </div>
  </section>
</div>

<!-- Stack -->
<div class="section-wrapper border-b">
  <section class="section py-8">
    <h2 class="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">Stack</h2>

    <ul class="space-y-2 text-sm text-muted-foreground">
      <li>• SvelteKit + Svelte 5 (runes)</li>
      <li>• shadcn-svelte UI components</li>
      <li>• Tailwind CSS v4 (forms + typography)</li>
      <li>• ESLint + Prettier configured</li>
      <li>• JavaScript-first setup (no TS friction)</li>
      <li>• VS Code devcontainer (Node.js 24)</li>
    </ul>
  </section>
</div>

<!-- Usage -->
<div class="section-wrapper border-b">
  <section class="section py-8">
    <h2 class="mb-6 text-sm font-medium tracking-widest text-muted-foreground uppercase">Usage</h2>

    <div class="flex flex-col gap-6">
      <Card.Root>
        <Card.Header>
          <Card.Title class="text-base">1. Clone template</Card.Title>
        </Card.Header>
        <Card.Content>
          <pre class="overflow-x-auto rounded-5px bg-muted p-3 text-xs"><code
              >git clone --depth=1 https://github.com/GeoGeorgeous/template.git new-app
cd new-app</code
            ></pre>
        </Card.Content>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <Card.Title class="text-base">Alternative (no local git)</Card.Title>
        </Card.Header>
        <Card.Content>
          <pre class="overflow-x-auto rounded-5px bg-muted p-3 text-xs"><code
              >docker run --rm -v "$PWD":/app -w /app alpine/git \
  clone --depth=1 https://github.com/GeoGeorgeous/template.git new-app
cd new-app</code
            ></pre>
        </Card.Content>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <Card.Title class="text-base">2. Initialize your repo</Card.Title>
        </Card.Header>
        <Card.Content>
          <pre class="overflow-x-auto rounded-5px bg-muted p-3 text-xs"><code
              >rm -rf .git
git init
git add .
git commit -m "initial commit"</code
            ></pre>
        </Card.Content>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <Card.Title class="text-base">3. Open in devcontainer</Card.Title>
        </Card.Header>
        <Card.Content>
          <p class="text-xs text-muted-foreground">
            Open in VS Code and reopen in the devcontainer to get a fully configured environment.
          </p>
        </Card.Content>
      </Card.Root>
    </div>
  </section>
</div>

<!-- Development -->
<div class="section-wrapper border-b">
  <section class="section py-8">
    <h2 class="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
      Development
    </h2>

    <pre class="overflow-x-auto rounded-5px bg-muted p-3 text-xs"><code
        >npm install
npm run dev     # http://localhost:3400
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run format
npm run shadcn-update</code
      ></pre>
  </section>
</div>

<!-- Structure -->
<div class="section-wrapper border-b">
  <section class="section py-8">
    <h2 class="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
      Structure
    </h2>

    <pre class="overflow-x-auto rounded-5px bg-muted p-3 text-xs"><code
        >src/
  app.html
  app.css
  lib/
    assets/
    components/ui/
    hooks/
    server/
    state/
    utils.js
  routes/</code
      ></pre>
  </section>
</div>

<!-- Notes -->
<div class="section-wrapper flex-1">
  <section class="section py-8">
    <Separator />

    <div class="mt-6 rounded-5px border border-dashed border-border p-4">
      <p class="text-xs text-muted-foreground">
        State pattern: use <code class="text-foreground">defineContext(name, StateClass)</code>
        from <code class="text-foreground">$state/state.svelte.js</code> to create context-backed
        reactive state. See <code class="text-foreground">auth.svelte.js</code>.
      </p>
    </div>

    <div class="mt-4 rounded-5px border border-dashed border-border p-4">
      <p class="text-xs text-muted-foreground">Clean reset:</p>
      <pre class="mt-2 overflow-x-auto rounded-5px bg-muted p-3 text-xs"><code
          >rm -rf .svelte-kit node_modules
npm install</code
        ></pre>
    </div>
  </section>
</div>
