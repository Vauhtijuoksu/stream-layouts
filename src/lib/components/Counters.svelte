<script lang="ts">
	import { metadata } from "$lib/stores/GameStore";
	import Counter from "./Counter.svelte";

    $: counters = $metadata?.counters ?? [];
</script>

<div class="counters">
    {#each counters as counter, i}
    {#if counter > -1}
    <Counter {i} {counter} />
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
</style>