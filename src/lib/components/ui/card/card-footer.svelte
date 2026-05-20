<script>
  import { cn } from '$utils.js';
  let { ref = $bindable(null), class: className, children, ...restProps } = $props();
</script>

<div
  bind:this={ref}
  data-slot="card-footer"
  class={cn(
    'flex items-center rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4',
    className,
  )}
  {...restProps}
>
  {@render children?.()}
</div>
