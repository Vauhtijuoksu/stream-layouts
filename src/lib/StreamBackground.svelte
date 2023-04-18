<script lang="ts">
	import type { LayoutBorder, LayoutHole } from "./models/LayoutConf";

  export let width = 1920;
  export let height = 1080;
  export let image = '';
  export let holes: Array<LayoutHole> = [];

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
        <rect {x} {y} {width} {height} />
      {/each}
    </mask>

    <pattern id="testPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="#ffe2ef" />
      <rect width="12" height="12" fill="#f0ddea" />
      <rect x="12" y="12" width="12" height="12" fill="#f0ddea" />
    </pattern>
  </defs>
  <rect class="background" x="0" y="0" {width} {height} mask="url(#holes)" />
  {#each holes as {layout: {x, y, width, height}, borders}}
    {#if borders?.left}
      <line class="border" x1={x} y1={y} x2={x} y2={y+height} {...borders.left} />
    {/if}
    {#if borders?.right}
      <line class="border" x1={x+width} y1={y} x2={x+width} y2={y+height} {...borders.top} />
    {/if}
    {#if borders?.top}
      <line class="border" x1={x} y1={y} x2={x+width} y2={y} {...borders.top} />
    {/if}
    {#if borders?.bottom}
      <line class="border" x1={x} y1={y+height} x2={x+width} y2={y+height} {...borders.bottom} />
    {/if}
  {/each}
</svg>
{/if}

<style>
  #canvas {
    position: fixed;
    left: 0;
    top: 0;
  }

  .background {
    fill: var(--background-color);
  }

  .border {
    stroke: var(--hole-border-stroke);
    stroke-width: var(--hole-border-stroke-width);

  }
</style>
