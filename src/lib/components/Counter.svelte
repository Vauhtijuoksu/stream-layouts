<script lang="ts">
	import { metadata } from "$lib/stores/GameStore";
	import { themestore } from "$lib/stores/ThemeStore";
	import ClickIcon from "./ClickIcon.svelte";


  export let index = -1;
  export let i = 0;
  export let counter: number;

  $: if (index > -1) {
    counter = $metadata?.counters[index];
  }
  $: images = $themestore?.images?.counter ?? ['/images/counter.png'];
</script>


{#if counter > -1}
<div class="counter" style="filter: brightness(150%) hue-rotate(calc(60deg * {i}));">
  <ClickIcon {images} image={0} style="max-width: var(--counter-font-size);"/>
  <div class="number">
      {counter}
  </div>
</div>
{/if}

<style>
.counter {
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;;
        align-items: center;
        font-size: var(--counter-font-size);
    }
</style>