<script lang="ts">
	import { metadata } from "$lib/stores/GameStore";

  $: nowPlaying = $metadata?.now_playing;
</script>

{#if nowPlaying}
<div class="nowPlaying">
  Nyt soi: {nowPlaying}
</div>
{/if}

<style>
  .nowPlaying {
    font-size: var(--font-size-sm);
  }
</style>
