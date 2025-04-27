<script lang="ts">
	import { metadata } from '$lib/stores/GameStore';
	import Counter from './Counter.svelte';

	export let size = "normal"

	$: counters = $metadata?.counters ?? [];

</script>

<div class="counters {size}">
	{#each counters as counter, i}
		<Counter {i} {counter} />
	{/each}
</div>

<style>
	.counters {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 0px;
		line-height: var(--counter-font-size);
	}
	.counters.small{
		--font-size-override: calc(var(--counter-font-size) * 0.7);
	}
</style>
