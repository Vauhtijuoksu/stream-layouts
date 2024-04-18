<script lang="ts">
	import { themestore } from "$lib/stores/ThemeStore";

  export let img_filename = '';
  export let img_alt = '';
  
  $: img_folder = $themestore.imageFolder ?? '2023';
  $: default_console = $themestore.images?.defaultConsole ?? '/consoles/2023/default.png';
</script>

<img
  src="/consoles/{img_folder}/{img_filename}"
  onerror="this.src = '{default_console}'"
  alt={img_alt}
  />

<style>
  img {
    max-height: 120px;
  }
</style>
