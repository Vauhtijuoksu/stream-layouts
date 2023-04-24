<script lang="ts">
	import type { LayoutBorder, LayoutHole, LayoutTheme } from "./models/LayoutConf";

  export let width = 1920;
  export let height = 1080;
  export let image = '';
  export let holes: Array<LayoutHole> = [];
  export let theme: LayoutTheme;

  function borderProps(border: LayoutBorder) {
    let props:  { [key: string]: string } = {};
    for (const [key, value] of Object.entries(border)) {
      const propKey = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
      props[propKey] = value;
    }
    return props;
  }
</script>

{#if image}
<div id="canvas">
  <img src="{image}" alt="layout background" />
</div>
{:else}
<svg id="canvas" {width} {height}>
  <defs>
    <mask id="holes">
      <rect {width} {height} fill="white" />
      {#each holes as {layout: {x, y, width, height}}}
        <rect {x} {y} {width} {height} rx="{theme?.borderRadius}" ry="{theme?.borderRadius}" />
      {/each}
    </mask>

    <pattern id="vj2023" patternUnits="userSpaceOnUse" width="750" height="725">
      <image href="/images/vj2023bg.png" x="0" y="0" width="750" height="725" />
    </pattern>
  </defs>
  <rect class="background" x="0" y="0" {width} {height} mask="url(#holes)" />
  {#each holes as {layout: {x, y, width, height}, name}}
    {#if false}
    <rect class="border" {x} {y} {width} {height} rx="{theme?.borderRadius}" ry="{theme?.borderRadius}" fill="none" />
    {/if}
  {/each}
</svg>
{/if}

<style>
  #canvas {
    position: absolute;
    left: 0;
    top: 0;
  }

  rect {
    rx: 10;
    ry: 10;
  }

  .background {
    fill: var(--override-background, var(--background));
  }

  .border {
    stroke: var(--hole-border-stroke);
    stroke-width: var(--hole-border-stroke-width);
  }
</style>
