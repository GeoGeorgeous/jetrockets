<script>
  import * as Perspective from '$components/perspective/index.js';
</script>

<div class="section-wrapper border-b">
  <section class="section py-8">
    <h3 class="text-xl font-semibold">Showcase</h3>
    <p class="text-base text-muted-foreground not-first:mt-2">
      Component demos. Hover the cards to interact.
    </p>
  </section>
</div>

<div class="section-wrapper border-b">
  <section class="section-wide py-8">
    <p class="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">Bento</p>
    <div class="grid-auto-rows grid grid-cols-3 gap-2">
      <!-- row 1 col 1, spans 2 rows -->
      <Perspective.Root
        class="h-full rounded-15px data-[state=entered]:shadow-xl"
        containerClass="row-span-2 h-full w-full"
        strength={20}
      >
        <div
          class="flex h-full w-full flex-col items-start gap-3 rounded-15px border border-border bg-card p-4 py-6"
        >
          <Perspective.Item translateZ={50}>
            <p class="text-sm font-medium">ご飯</p>
          </Perspective.Item>
          <Perspective.Item translateZ={20}>
            <p class="text-xs text-muted-foreground">Gohan — steamed white rice</p>
          </Perspective.Item>
        </div>
      </Perspective.Root>

      <!-- row 1 col 2-3 — wide card, strength scaled by 1/2 -->
      <Perspective.Root
        class="h-full rounded-15px data-[state=entered]:shadow-xl"
        containerClass="col-span-2 h-full w-full"
        strength={31}
      >
        <div
          class="flex h-full w-full flex-col items-start gap-3 rounded-15px border border-border bg-card p-4 py-6"
        >
          <Perspective.Item translateZ={20}>
            <p class="text-sm font-medium">鮭の塩焼き</p>
          </Perspective.Item>
          <Perspective.Item translateZ={18}>
            <p class="text-xs text-muted-foreground">Sake no shioyaki — salt-grilled salmon</p>
          </Perspective.Item>
        </div>
      </Perspective.Root>

      <!-- row 2 col 2 -->
      <Perspective.Root
        class="h-full rounded-15px data-[state=entered]:shadow-xl"
        containerClass="h-full w-full"
        strength={15}
      >
        <div
          class="flex h-full w-full flex-col items-start gap-3 rounded-15px border border-border bg-card p-4 py-6"
        >
          <Perspective.Item translateZ={30}>
            <p class="text-sm font-medium">玉子焼き</p>
          </Perspective.Item>
          <Perspective.Item translateZ={20}>
            <p class="text-xs text-muted-foreground">Tamagoyaki — sweet rolled omelette</p>
          </Perspective.Item>
        </div>
      </Perspective.Root>

      <!-- row 2 col 3 -->
      <Perspective.Root
        class="h-full rounded-15px data-[state=entered]:shadow-xl"
        containerClass="h-full w-full"
        strength={15}
      >
        <div
          class="flex h-full w-full flex-col items-start gap-3 rounded-15px border border-border bg-card p-4 py-6"
        >
          <Perspective.Item translateZ={50}>
            <p class="text-sm font-medium">梅干し</p>
          </Perspective.Item>
          <Perspective.Item translateZ={20}>
            <p class="text-xs text-muted-foreground">Umeboshi — pickled sour plum</p>
          </Perspective.Item>
        </div>
      </Perspective.Root>

      <!-- row 3 col 1 -->
      <Perspective.Root
        class="h-full rounded-15px data-[state=entered]:shadow-xl"
        containerClass="h-full w-full"
        strength={15}
      >
        <div
          class="flex h-full w-full flex-col items-start gap-3 rounded-15px border border-border bg-card p-4 py-6"
        >
          <Perspective.Item translateZ={50}>
            <p class="text-sm font-medium">枝豆</p>
          </Perspective.Item>
          <Perspective.Item translateZ={20}>
            <p class="text-xs text-muted-foreground">Edamame — steamed salted soybeans</p>
          </Perspective.Item>
        </div>
      </Perspective.Root>

      <!-- row 3 col 2-3 — wide card, strength scaled by 1/2 -->
      <Perspective.Root
        class="h-full rounded-15px data-[state=entered]:shadow-xl"
        containerClass="col-span-2 h-full w-full"
        strength={80}
      >
        <div
          class="flex h-full w-full flex-col items-start gap-3 rounded-15px border border-border bg-card p-4 py-6"
        >
          <Perspective.Item translateZ={20}>
            <p class="text-sm font-medium">唐揚げ</p>
          </Perspective.Item>
          <Perspective.Item translateZ={18}>
            <p class="text-xs text-muted-foreground">Karaage — Japanese fried chicken</p>
          </Perspective.Item>
        </div>
      </Perspective.Root>
    </div>
  </section>
</div>

<div class="section-wrapper flex-1">
  <section class="section py-8">
    <p class="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
      Perspective Card
    </p>
    <ul class="grid grid-cols-2 gap-4">
      <!-- card 1 -->
      <Perspective.Root
        class="h-full min-h-98 rounded-15px data-[state=entered]:shadow-xl"
        containerClass="w-full h-full"
        strength={15}
      >
        <li
          class="relative flex h-full w-full flex-col rounded-card-lg border border-input px-1.75 py-2.25 transition-colors hover:border-foreground/30"
        >
          <Perspective.Item translateZ={10} translateY={-4} class="w-full rounded-15px">
            <div class="relative overflow-hidden rounded-t-15px">
              <div class="mx-auto h-64 w-full rounded-t-15px bg-muted"></div>
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
                  Surface
                </p>
                <p
                  class="scale-x-[1.4] scale-y-[1.6] text-xl leading-none font-medium tracking-[-0.02em] text-muted-foreground uppercase italic"
                >
                  01
                </p>
              </Perspective.Item>
            </div>
            <Perspective.Item translateZ={60}>
              <p class="text-xs font-semibold text-muted-foreground">
                Mouse-tracked 3D transform. Each child layer floats at a different Z depth.
              </p>
            </Perspective.Item>
          </div>
        </li>
      </Perspective.Root>

      <!-- card 2 -->
      <Perspective.Root
        class="h-full min-h-98 rounded-15px data-[state=entered]:shadow-xl"
        containerClass="w-full h-full"
        strength={15}
      >
        <li
          class="relative flex h-full w-full flex-col rounded-card-lg border border-input px-1.75 py-2.25 transition-colors hover:border-foreground/30"
        >
          <Perspective.Item translateZ={10} translateY={-4} class="w-full rounded-15px">
            <div class="relative overflow-hidden rounded-t-15px">
              <div class="mx-auto h-64 w-full rounded-t-15px bg-muted"></div>
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
                  Float
                </p>
                <p
                  class="scale-x-[1.4] scale-y-[1.6] text-xl leading-none font-medium tracking-[-0.02em] text-muted-foreground uppercase italic"
                >
                  02
                </p>
              </Perspective.Item>
            </div>
            <Perspective.Item translateZ={60}>
              <p class="text-xs font-semibold text-muted-foreground">
                No external libraries. Built with Svelte 5 context and CSS perspective transforms.
              </p>
            </Perspective.Item>
          </div>
        </li>
      </Perspective.Root>
    </ul>
  </section>

  <!-- Sections demo: label -->
  <div class="section-wrapper border-b">
    <section class="section py-6">
      <p class="text-xs font-medium tracking-widest text-muted-foreground uppercase">Sections</p>
    </section>
  </div>

  <!-- demo 1: basic section -->
  <div class="section-wrapper border-b">
    <section class="section py-4">
      <code class="text-xs text-muted-foreground">section-wrapper + section</code>
      <p class="mt-1 text-sm font-medium">Default — max-w-screen-sm, dashed side borders</p>
    </section>
  </div>

  <!-- demo 2: background section -->
  <div class="section-wrapper">
    <section class="section bg-muted/30 py-4">
      <code class="text-xs text-muted-foreground">section-wrapper + section</code>
      <p class="mt-1 text-sm font-medium">Background — narrow column with tint</p>
    </section>
  </div>

  <!-- demo 3: full-width section -->
  <section
    class="section-full border-y border-dashed border-border bg-muted/30 py-4 borderless:border-transparent"
  >
    <div class="mx-auto max-w-screen-sm px-4">
      <code class="text-xs text-muted-foreground">section-full</code>
      <p class="mt-1 text-sm font-medium">Full width — edge-to-edge bg, centered content</p>
    </div>
  </section>

  <!-- demo 4: wide section -->
  <div class="section-wrapper border-b">
    <section class="section-wide py-4">
      <code class="text-xs text-muted-foreground">section-wrapper + section-wide</code>
      <p class="mt-1 text-sm font-medium">Wide — max-w-3xl, no side borders</p>
    </section>
  </div>
</div>
