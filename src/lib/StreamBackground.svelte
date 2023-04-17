<script lang="ts">
	import type { LayoutBorder, LayoutHole } from "./models/LayoutConf";

  export let width = 1920;
  export let height = 1080;
  export let fill = "blue";
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

<svg id="canvas" {width} {height}>
  <defs>
    <mask id="holes">
      <rect {width} {height} fill="white" />
      {#each holes as {layout: {x, y, width, height}}}
        <rect {x} {y} {width} {height} />
      {/each}
    </mask>
  </defs>
  <rect x="0" y="0" width="{width}" height="{height}" {fill} mask="url(#holes)" />
  {#each holes as {layout: {x, y, width, height}, border}}
    {#if border}
      <rect {x} {y} {width} {height} {...borderProps(border)} fill="none" />
    {/if}
  {/each}
</svg>

<style>
  #canvas {
    position: fixed;
    left: 0;
    top: 0;
  }
</style>
