<script lang="ts">
	import StreamLayout from '$lib/StreamLayout.svelte';

	export let data;
</script>

{#if data.layout}
	<StreamLayout layout={data.layout} theme={data.theme} />
{:else}
	<div>No layout {data.layoutName} found</div>
{/if}
