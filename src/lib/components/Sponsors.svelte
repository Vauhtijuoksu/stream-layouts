<script lang="ts">
	import { onMount } from 'svelte';
  import { fly, slide } from 'svelte/transition';
  export let sponsors: string[];
  
  let i = 0;
  $: sponsor = sponsors[i];
  let timeout: number;

  const swap = (delay: number) => {
    return setTimeout(() => {
      i += 1;
      i = i >= sponsors.length ? 0 : i;
      timeout = swap(delay);
    }, delay);
  };

  onMount(() => {
    swap(2000);
    return () => clearTimeout(timeout);
  })
</script>

<div class="sponsors">
  {#key sponsor}
  <img
    src="{sponsor}"
    class="sponsor"
    transition:slide="{{ axis: 'x', duration: 1000 }}"
    alt="sponsor"
    />
  {/key}
</div>

<style>
  .sponsors {
    position: relative;
    height: var(--sponsors-height);
    width: var(--sponsort-width);
		image-rendering: auto;
  }

  .sponsor {
    position: relative;
    max-height: 100%;
    max-width: 100%;
  }
</style>