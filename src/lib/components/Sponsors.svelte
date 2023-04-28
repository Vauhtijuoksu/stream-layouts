<script lang="ts">
	import type { Sponsor } from '$lib/models/LayoutConf';
	import { themestore } from '$lib/stores/ThemeStore';
	import { onMount } from 'svelte';
  import { fade, fly, slide, type SlideParams } from 'svelte/transition';
  export let sponsors: Sponsor[] = $themestore.sponsors;
  export let duration = 5000;
  
  let i = 0;
  $: sponsor = sponsors[i];
  let timeout: NodeJS.Timeout;

  const swap = (delay: number) => {
    return setTimeout(() => {
      i = (i + 1) % sponsors.length;
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
      in:fly="{{ delay: 800, duration: 1000, x: 500 }}"
      out:fly="{{ duration: 1000, x: -500 }}"
      src="{sponsor.img_url}"
      class="sponsor"
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
    flex-grow: 1;
  }

  .sponsor {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    max-height: 100%;
    max-width: 100%;
  }
</style>