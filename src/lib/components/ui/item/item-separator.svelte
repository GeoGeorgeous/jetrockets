<script>
  import { Separator } from '$components/ui/separator/index.js';
  import { cn } from '$utils.js';
  let { ref = $bindable(null), class: className, ...restProps } = $props();
</script>

<Separator
  bind:ref
  data-slot="item-separator"
  orientation="horizontal"
  class={cn('my-2', className)}
  {...restProps}
/>
