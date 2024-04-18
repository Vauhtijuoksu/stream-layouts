<script lang="ts">
	import { themestore } from "$lib/stores/ThemeStore";

  export let img_filename = '';
  export let img_style='';

  $: img_folder = $themestore.imageFolder ?? '2023';
</script>

<div class="game icon">
  <img 
    src="/gameicons/{img_folder}/{img_filename}"
    alt="{img_filename}"
    style="{img_style}"
    />
</div>

<style>
  .game.icon {
    width: 200px;
    position: relative;
  }
  .game.icon > img {
    max-height: 200px;
    z-index: 20;
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    filter: var(--game-icon-filter, none);
  }
</style>
