<script lang="ts">
	import type { Sponsor } from '$lib/models/LayoutConf';
	import { themestore } from '$lib/stores/ThemeStore';
	import { onMount } from 'svelte';
  import { fly, slide } from 'svelte/transition';
  export let sponsors: Sponsor[] = $themestore.sponsors;
  export let duration = 3000;
  
  let i = 0;
  $: sponsor = sponsors[i];
  let timeout: number;

  const swap = (delay: number) => {
    return setTimeout(() => {
      i += 1;
      i = i >= sponsors.length ? 0 : i;
      timeout = swap(sponsors[i].duration ?? duration);
    }, delay);
  };

  onMount(() => {
    swap(sponsor.duration ?? duration);
    return () => clearTimeout(timeout);
  })
</script>

<h1 class="header">Yhteistyössä</h1>
<div class="sponsors">
  {#key sponsor}
  <img
    src="{sponsor.img_url}"
    class="sponsor"
    transition:slide="{{ axis: 'x', duration: 1000 }}"
    alt="{sponsor.name}"
    />
  {/key}
</div>

<style>
  .header {
    height: 10%;
    font-size: var(--sponsors-font-size);
  }
  .sponsors {
    position: relative;
    height: 90%;
  }

  .sponsor {
    position: relative;
    max-height: 100%;
    max-width: 100%;
  }
</style>