<script>
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { cn } from '$utils.js';

  let { ref = $bindable(null), value = $bindable(), class: className, ...restProps } = $props();
</script>

<AccordionPrimitive.Root
  bind:ref
  bind:value
  data-slot="accordion"
  class={cn('cn-accordion flex w-full flex-col', className)}
  {...restProps}
/>
