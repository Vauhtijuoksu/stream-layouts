<script lang="ts">
	import { themestore } from "$lib/stores/ThemeStore";

    export let x: number;
    export let y: number;
    export let width: number;
    export let height: number;
    export let borderWidth = 0;
    export let borderRadius = 0;
    $: borderWidth = $themestore.borderWidth;
    $: borderRadius = $themestore.borderRadius;
</script>

<div style="left: {x-borderRadius}px; top: {y-borderWidth}px; width: {width+borderRadius}px; height: {height+borderWidth*2}px;">
</div>

<style>
    div {
        position: absolute;
        border: var(--border);
        border-radius: var(--border-radius);
    }
</style>
