<script>
  import { cn } from '$utils.js';
  let { ref = $bindable(null), class: className, children, ...restProps } = $props();
</script>

<div
  bind:this={ref}
  data-slot="empty"
  class={cn(
    'flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-lg border-dashed p-12 text-center text-balance',
    className,
  )}
  {...restProps}
>
  {@render children?.()}
</div>
