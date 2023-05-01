<script lang="ts">
	import { metadata } from '$lib/stores/GameStore';
	import Counter from './Counter.svelte';

	$: counters = $metadata?.counters ?? [];
</script>

<div class="counters">
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
	}
</style>
