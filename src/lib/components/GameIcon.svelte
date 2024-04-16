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
  .game.icon > img {
    max-height: 200px;
  }
</style>
