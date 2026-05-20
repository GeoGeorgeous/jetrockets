<script>
  import { cn } from '$lib/utils.js';
  import BordersToggle from './borders-toggle.svelte';
  import Logo from './header-logo.svelte';
  import Navigation from './header-navigation.svelte';
  import ThemeToggle from './theme-toggle.svelte';

  let { ref = $bindable(null), class: className, ...restProps } = $props();
</script>

<header
  class={cn('flex items-center justify-between gap-4 px-4 py-3.5', className)}
  {...restProps}
  bind:this={ref}
>
  <div class="flex items-center gap-12">
    <Logo />
    <Navigation />
  </div>
  <div class="flex items-center gap-1">
    <BordersToggle />
    <ThemeToggle />
  </div>
</header>
