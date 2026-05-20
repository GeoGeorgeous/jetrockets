<script>
  import Footer from '$components/footer/footer.svelte';
  import { Header } from '$components/header';
  import * as Tooltip from '$components/ui/tooltip/index.js';
  import { setConfig } from '$state/config.svelte.js';
  import { ModeWatcher } from 'mode-watcher';
  import '../app.css';

  let { data, children } = $props();

  // svelte-ignore state_referenced_locally
  const config = setConfig(data.config);

  $effect(() => {
    if (config.ui.borderless) {
      document.documentElement.classList.add('borderless');
    } else {
      document.documentElement.classList.remove('borderless');
    }
  });
</script>

<svelte:head>
  <title>template</title>
  <meta name="description" content="SvelteKit starter template." />
</svelte:head>

<ModeWatcher />

<Tooltip.Provider delayDuration={50}>
  <div class="relative z-10 flex min-h-svh flex-col bg-background">
    <header
      class="sticky top-0 z-50 border-b border-dashed border-border bg-background/70 backdrop-blur-xl borderless:border-transparent"
    >
      <div
        class="mx-auto max-w-screen-sm border-x border-dashed border-border borderless:border-transparent"
      >
        <Header />
      </div>
    </header>

    <main class="flex flex-1 flex-col">
      {@render children()}
    </main>

    <Footer />
  </div>
</Tooltip.Provider>
