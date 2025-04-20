<script lang="ts">
	import type { Sponsor } from '$lib/models/LayoutConf';
	import { themestore } from '$lib/stores/ThemeStore';
	import { onMount } from 'svelte';
  import { fade, fly, slide, type SlideParams } from 'svelte/transition';
  export let duration = 5000;
  
  let i = 0;
  $: sponsor = $themestore.sponsors[i];
  let timeout: NodeJS.Timeout;

  const swap = (delay: number) => {
    return setTimeout(() => {
      i = (i + 1) % $themestore.sponsors.length;
      timeout = swap($themestore.sponsors[i].duration ?? duration);
    }, delay);
  };

  onMount(() => {
    swap(sponsor.duration ?? duration);
    return () => clearTimeout(timeout);
  })
</script>

<span class="header">Yhteistyössä</span>
<div class="sponsors">
  {#key sponsor}
    <img
      in:fly="{{ delay: 500, duration: 700, x: '50%' }}"
      out:fly="{{ duration: 700, x: '-50%' }}"
      src="{sponsor.img_url}"
      class="sponsor"
      alt="{sponsor.name}"
      />
  {/key}
</div>

<style>
  .header {
    padding-left: var(--header-padding-override, 0px);
    height: var(--header-size-override, 10%);
    font-size: var(--font-size-override, --sponsors-font-size);
    font-family: var(--header-font);
    letter-spacing: var(--spaced-lettering);
    font-weight: normal;
  }
  .sponsors {
    position: relative;
    flex-grow: 1;
    padding: 10px;
    overflow: visible;
  }

  .sponsor {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    max-height: 85%;
    max-width: 90%;
  }
</style>