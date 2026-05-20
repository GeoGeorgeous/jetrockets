<script>
  import { cn } from '$utils.js';
  import { Separator } from '$components/ui/separator/index.js';

  let {
    ref = $bindable(null),
    class: className,
    orientation = 'vertical',
    ...restProps
  } = $props();
</script>

<Separator
  bind:ref
  data-slot="button-group-separator"
  {orientation}
  class={cn(
    'relative self-stretch bg-input data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto',
    className,
  )}
  {...restProps}
/>
