<script>
  import { cn } from '$lib/utils.js';
  import { setContext } from 'svelte';

  let {
    children,
    class: className = '',
    containerClass = '',
    strength = 25,
    disabled = false,
  } = $props();

  let containerRef = $state(null);
  const mouseState = $state({ isEntered: false });

  setContext('perspective', mouseState);

  const handleMouseMove = e => {
    if (!containerRef || disabled) return;
    const { left, top, width, height } = containerRef.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / strength;
    const y = (e.clientY - top - height / 2) / strength;

    containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    mouseState.isEntered = true;
  };

  const handleMouseLeave = () => {
    if (!containerRef || disabled) return;
    mouseState.isEntered = false;
    containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
</script>

<div class={cn(containerClass)} aria-disabled={disabled} style="perspective: 1000px;">
  <div
    bind:this={containerRef}
    onmouseenter={handleMouseEnter}
    onmousemove={handleMouseMove}
    onmouseleave={handleMouseLeave}
    role="presentation"
    data-state={mouseState.isEntered ? 'entered' : 'idle'}
    class={cn(
      'relative flex w-full items-center justify-center transition-all duration-200 ease-linear',
      'transform-3d **:transform-3d',
      className,
    )}
    style="transform-style: preserve-3d;"
  >
    {@render children()}
  </div>
</div>
