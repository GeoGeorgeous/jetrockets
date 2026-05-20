<script>
  import { Button } from '$components/ui/button/index.js';

  let { ref = $bindable(null), ...restProps } = $props();
</script>

<Button bind:ref type="submit" {...restProps} />
