<script>
  import { Separator } from '$components/ui/separator/index.js';
  import { cn } from '$utils.js';

  let { ref = $bindable(null), class: className, ...restProps } = $props();
</script>

<Separator
  bind:ref
  data-slot="select-separator"
  class={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
  {...restProps}
/>
