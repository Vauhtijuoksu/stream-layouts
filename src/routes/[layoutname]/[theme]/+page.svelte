<script lang="ts">
	import StreamLayout from "$lib/StreamLayout.svelte";

  export let data;
</script>

{#if data.layout }
<StreamLayout layout="{data.layout}" theme="{data.theme}"/>
{:else}
<div>No layout {data.layoutName} found</div>
{/if}

<style>
  :global(body), :global(html) {
    background-color: transparent;
    margin: 0;
    padding: 0;
    font-family: 'MisterPixel';
    color: #a3cdd6;
    text-align: center;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
</style>