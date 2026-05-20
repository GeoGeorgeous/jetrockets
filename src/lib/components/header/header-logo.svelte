<script>
  import { Button } from '$components/ui/button';
  import { base } from '$app/paths';
</script>

<Button
  href="{base}/"
  variant="link"
  class="-mt-1 flex self-center p-0! text-sm font-semibold hover:no-underline sm:hidden"
>
  tmpl
</Button>

<Button
  href="{base}/"
  variant="link"
  class="-mt-1 hidden self-center p-0! text-base font-semibold hover:no-underline sm:flex"
>
  template
</Button>
