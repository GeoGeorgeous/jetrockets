<script>
  import { page } from '$app/stores';
  import { Button } from '$components/ui/button/index.js';
</script>

<div class="flex min-h-screen flex-col">
  <div class="border-b border-dashed border-border pb-24 md:px-12 lg:px-24"></div>

  <div class="flex flex-1 md:px-12 lg:px-24">
    <div class="mx-auto flex w-full max-w-screen-xl 2xl:max-w-screen-2xl">
      <main class="flex w-full flex-col items-start justify-center space-y-6">
        <h1 class="text-4xl font-semibold tracking-wide">
          Error
          {$page.status}
        </h1>
        <div class="text-left font-mono text-xs leading-tight italic">
          {#if $page.error?.message}
            <strong>{$page.error?.message}</strong>
          {/if}
          <p>sometimes consistency breaks</p>
          <p>and the moment is lost</p>
          <p>in digital mist</p>
        </div>
        <div class="flex flex-col items-center gap-0">
          <!-- eslint-disable svelte/no-navigation-without-resolve -->
          <Button href="/" variant="default" class="mx-auto mt-12">Take me home</Button>
          <!-- eslint-enable svelte/no-navigation-without-resolve -->
        </div>
      </main>
    </div>
  </div>

  <div class="border-t border-dashed border-border pb-24 md:px-12 lg:px-24"></div>
</div>
