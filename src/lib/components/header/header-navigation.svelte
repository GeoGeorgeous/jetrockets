<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { Button } from '$components/ui/button';
  import { cn } from '$lib/utils.js';
  import { navigation } from './config';

  let { class: className, ...restProps } = $props();
</script>

<nav class={cn('flex flex-row gap-2', className)} {...restProps}>
  {#each navigation as nav, index (index)}
    {@const href = base + nav.href}
    {@const isActive = $page.url.pathname.startsWith(href)}
    <Button
      variant="ghost"
      disabled={!nav.enabled}
      {href}
      class={cn(
        'flex items-center gap-2',
        isActive ? 'bg-sleepy font-medium text-primary' : 'text-muted-foreground',
      )}
    >
      {#if nav.icon}
        <nav.icon />
      {/if}
      {nav.name}</Button
    >
  {/each}
</nav>
