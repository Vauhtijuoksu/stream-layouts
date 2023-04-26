<script lang="ts">
	import StreamLayout from '$lib/StreamLayout.svelte';

	export let data;
</script>

{#if data.component}
	<svelte:component this={data.component} />
{:else if data.layout}
	<StreamLayout layout={data.layout} />
{:else}
	<div>No layout {data.layoutName} found</div>
{/if}
