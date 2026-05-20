<script>
  import { Button } from '$components/ui/button';
  import { getConfig } from '$state/config.svelte.js';
  import RulerIcon from '@lucide/svelte/icons/ruler';

  const config = getConfig();
</script>

<Button onclick={() => (config.ui.borderless = !config.ui.borderless)} size="icon" variant="icon">
  <RulerIcon class="h-[1.2rem] w-[1.2rem]" />
  <span class="sr-only">Toggle borders</span>
</Button>
