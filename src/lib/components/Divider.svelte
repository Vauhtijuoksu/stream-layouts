<script lang="ts">
	import { metadata } from '$lib/stores/GameStore';
	import { themestore } from '$lib/stores/ThemeStore';
	export let i = 0;

	$: dividerImgs = $themestore.images?.dividers ?? ['/images/2023/divider.png']
</script>


<img class="divider" src="{dividerImgs[i % dividerImgs.length]}" alt="divider" />

<style>
  .divider{
    height: 32px;
    padding: 0 20px;
    text-shadow: none;
  }
</style>
