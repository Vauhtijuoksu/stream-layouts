<script lang="ts">
	export let name: string = '';
	export let cls: string = '';
	export let x: number;
	export let y: number;
	export let width: number;
	export let height: number;
	export let style: string = '';
</script>

<div id={name} class={cls} style="left: {x}px; top: {y}px; width: {width}px; height: {height}px; {style}">
	<slot />
</div>

<style>
	div {
		position: absolute;
	}
</style>
