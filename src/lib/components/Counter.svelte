<script lang="ts">
	import { metadata } from "$lib/stores/GameStore";
	import { themestore } from "$lib/stores/ThemeStore";
	import ClickIcon from "./ClickIcon.svelte";

  export let index = -1;
  export let i = 0;
  export let counter: number = -1;

  $: if (index > -1) {
    counter = $metadata?.counters[index];
  }
  $: images = $themestore?.images?.counter ?? ['/images/2023/counter.png'];
</script>


{#if counter > -1}
<div class="counter">
    <div class="counterimg" style="filter: hue-rotate(calc(60deg * {i})) var(--counter-icon-filter, none);">
        <ClickIcon {images} image={0} style="max-width: var(--counter-font-size);"/>
    </div>
  <div class="number">
      {counter}
  </div>
</div>
{/if}

<style>
.counter {
        display: flex;
        flex-direction: column;
        justify-content: center;;
        align-items: center;
        font-size: var(--font-size-override, var(--counter-font-size));
    }
</style>