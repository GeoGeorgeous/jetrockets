<script>
  import { buttonVariants } from '$components/ui/button/index.js';
  import * as DropdownMenu from '$components/ui/dropdown-menu/index.js';
  import { Label } from '$components/ui/label/index';
  import { Switch } from '$components/ui/switch/index';
  import { getConfig } from '$state/config.svelte.js';
  import LightbulbIcon from '@lucide/svelte/icons/lightbulb';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import RulerIcon from '@lucide/svelte/icons/ruler';
  import SunIcon from '@lucide/svelte/icons/sun';
  import { resetMode, setMode } from 'mode-watcher';

  const config = getConfig();

  const handleCheckedChange = () => {
    config.ui.borderless = !config.ui.borderless;
  };
</script>

<div class="section-wrapper border-b">
  <section class="section py-8">
    <h3 class="text-xl font-semibold">Settings</h3>
    <p class="text-base text-muted-foreground not-first:mt-2">Styling and layout preferences.</p>
  </section>
</div>

<div class="section-wrapper border-b">
  <section class="section">
    <div class="flex flex-col gap-4">
      <div class="mb-2 space-y-1">
        <h3 class="text-lg leading-none font-semibold -tracking-[0.01em] lg:text-[17px]">Theme</h3>
        <p class="text-sm text-muted-foreground">Styling and layout settings.</p>
      </div>
      <div
        class="items-top flex items-center justify-between gap-4 space-x-2 rounded-5px border border-border px-4 py-3"
      >
        <Label for="borderless" class="flex flex-col items-start">
          <div class="inline-flex items-center gap-2">
            <RulerIcon class="size-5" aria-label="Borders" />
            <span>Show layout borders</span>
          </div>
          <span class="leading-snug font-normal text-muted-foreground">
            Hide layout borders for a cleaner look. Show for easier development.
          </span>
        </Label>
        <Switch
          id="borderless"
          checked={!config.ui.borderless}
          onCheckedChange={handleCheckedChange}
          aria-label="layout-borders"
        />
      </div>
      <div
        class="items-top flex items-center justify-between gap-4 space-x-2 rounded-5px border border-border px-4 py-3"
      >
        <Label for="layout-borders" class="flex flex-col items-start">
          <div class="inline-flex items-center gap-2">
            <LightbulbIcon class="size-5" aria-label="Bulb" />
            <span>Dark / Light</span>
          </div>
          <span class="leading-snug font-normal text-muted-foreground">
            Choose between light and dark mode, or let the system decide.
          </span>
        </Label>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
            <SunIcon
              class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
            />
            <MoonIcon
              class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
            />
            <span class="sr-only">Toggle theme</span>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
            <DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
            <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  </section>
</div>

<div class="section-wrapper flex-1">
  <section class="section">
    <div class="flex flex-col gap-4">
      <div class="mb-2 space-y-1">
        <h3 class="text-lg leading-none font-semibold -tracking-[0.01em] lg:text-[17px]">
          Experiments
        </h3>
        <p class="text-sm text-muted-foreground">
          These are experimental features that may not work as expected yet.
        </p>
      </div>
      <div
        class="items-top flex items-center justify-between gap-4 space-x-2 rounded-5px border border-border px-4 py-3"
      >
        <Label for="necessary" class="flex flex-col items-start">
          <span>Compact Layout</span>
          <span class="leading-snug font-normal text-muted-foreground">
            Compact view with roomy padding.
          </span>
        </Label>
        <Switch id="necessary" checked disabled aria-label="Necessary" />
      </div>
    </div>
  </section>
</div>
