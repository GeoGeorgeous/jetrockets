<script>
  import { cn } from '$lib/utils.js';
  import { getContext } from 'svelte';

  let {
    children,
    as = 'div',
    class: className = '',
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
  } = $props();

  const mouseState = getContext('perspective');

  const transform = $derived(
    mouseState?.isEntered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
  );
</script>

<svelte:element
  this={as}
  class={cn('transition duration-200 ease-linear', className)}
  data-state={mouseState.isEntered ? 'entered' : 'idle'}
  style="transform: {transform};"
  {...rest}
>
  {@render children()}
</svelte:element>
