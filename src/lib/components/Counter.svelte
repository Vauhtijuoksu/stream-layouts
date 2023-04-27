<script lang="ts">
	import { metadata } from "$lib/stores/GameStore";
	import { themestore } from "$lib/stores/ThemeStore";
	import ClickIcon from "./ClickIcon.svelte";

    $: counters = $metadata?.counters ?? [];
    $: images = $themestore?.images?.counter ?? ['/images/counter.png'];
</script>

<div class="counters">
    {#each counters as counter, i}
    {#if counter > -1}
    <div class="counter" style="filter: brightness(150%) hue-rotate(calc(60deg * {i}));">
        <ClickIcon {images} image={0} style="max-width: var(--counter-font-size);"/>
        <div class="number">
            {counter}
        </div>
    </div>
    {/if}
    {/each}
</div>

<style>
    .counters {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 5px;
    }
    .counter {
        display: flex;
        flex-direction: column;
        justify-content: center;;
        align-items: center;
        font-size: var(--counter-font-size);
    }
</style>