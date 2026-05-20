<script>
  import { cn } from '$utils.js';
  import { Command as CommandPrimitive } from 'bits-ui';

  let {
    api = $bindable(null),
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  } = $props();
</script>

<CommandPrimitive.Root
  bind:this={api}
  bind:value
  bind:ref
  data-slot="command"
  class={cn(
    'flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground',
    className,
  )}
  {...restProps}
/>
