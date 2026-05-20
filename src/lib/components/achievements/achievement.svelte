<script>
  import * as Perspective from '$components/perspective/index.js';
  import * as Avatar from '$components/ui/avatar/index.js';
  import { Progress } from '$components/ui/progress/index.js';
  import { cn } from '$lib/utils.js';
  import Lock from '@lucide/svelte/icons/lock';

  let { achievement } = $props();

  let progressPercent = $derived(() =>
    Math.floor((achievement.progress / achievement.progressTotal) * 100),
  );
</script>

<Perspective.Root
  class="h-full min-h-98 rounded-15px data-[state=entered]:shadow-xl"
  containerClass="w-full h-full"
  strength={15}
  disabled={!achievement.isUnlocked}
>
  <li
    class={cn(
      'relative flex h-full w-full flex-col rounded-card-lg border border-input px-1.75 py-2.25 transition-colors',
      achievement.isUnlocked && 'hover:border-ink',
    )}
  >
    <div class="absolute inset-0 z-10 flex h-fit justify-between p-4">
      <Perspective.Item translateZ={45}>
        <span
          class="inline-flex items-center gap-x-1.5 rounded-md bg-background/80 px-1.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm"
        >
          <svg viewBox="0 0 6 6" aria-hidden="true" class="size-1.5 fill-gray-400">
            <circle r="3" cx="3" cy="3" />
          </svg>
          {Math.floor(Math.random() * 100)}%
        </span>
      </Perspective.Item>
    </div>
    <Perspective.Item translateZ={10} translateY={-4} class="w-full rounded-15px">
      <div class="relative overflow-hidden rounded-t-15px">
        <img
          src={achievement.image}
          alt={achievement.name}
          class={cn(
            'mx-auto h-64 w-full rounded-t-15px object-cover object-bottom grayscale',
            achievement.isUnlocked && 'grayscale-0',
          )}
          class:hidden={!achievement.image}
        />
        {#if !achievement.image}
          <div
            class="mx-auto flex h-64 w-full items-center justify-center rounded-t-15px bg-muted"
          ></div>
        {/if}
        {#if !achievement.isUnlocked}
          <div class="absolute inset-0 grid place-items-center bg-muted/60 backdrop-blur-md">
            <Lock />
          </div>
        {/if}
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background via-background/50 to-transparent"
        ></div>
      </div>
    </Perspective.Item>

    <div class="flex flex-1 flex-col gap-2 px-4 pb-2">
      <div class="-mt-3">
        <Perspective.Item translateZ={65} class="flex justify-between gap-2">
          <p
            class="mb-1 scale-y-[1.6] text-xl leading-none font-bold tracking-[-0.02em] uppercase italic"
          >
            {achievement.name}
          </p>
          <p
            class="scale-x-[1.4] scale-y-[1.6] text-xl leading-none font-medium tracking-[-0.02em] text-muted-foreground uppercase italic"
          >
            {achievement.index.toString().padStart(2, '0')}
          </p>
        </Perspective.Item>
      </div>
      <Perspective.Item translateZ={60} class="flex justify-between gap-2">
        <p class="text-xs font-semibold text-muted-foreground">
          {achievement.description}
        </p>
      </Perspective.Item>
      <Perspective.Item translateZ={60} class="flex items-center gap-2">
        <Progress value={progressPercent} class="h-1 rounded-full" />
        <p class="text-xs">{achievement.progress}/{achievement.progressTotal}</p>
      </Perspective.Item>
      <Perspective.Item translateZ={50} class="mt-auto flex items-center gap-2">
        <Avatar.Root class="size-6">
          <Avatar.Image src="" alt="@user" />
          <Avatar.Fallback>U</Avatar.Fallback>
        </Avatar.Root>
        <p class="text-xs font-semibold text-muted-foreground">
          User ∙ <span class="text-foreground">{achievement.status}</span>
        </p>
      </Perspective.Item>
    </div>
  </li>
</Perspective.Root>
