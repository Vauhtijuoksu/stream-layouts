<script lang="ts">
	import { metadata } from "$lib/stores/GameStore";

    $: counters = $metadata?.counters ?? [];

    let icon = '/images/counter.png';

</script>

{#each counters as counter, i}
{#if counter > -1}
<div class="counter" style="filter: brightness(150%) hue-rotate(calc(60deg * {i}));">
    <img class="icon" src={icon} alt="counter" />
    <div class="number">
        {counter}
    </div>
</div>
{/if}
{/each}

<style>
    .counter {
        display: flex;
        flex-direction: column;
        justify-content: center;;
        align-items: center;
        font-size: var(--counter-font-size);
    }

    .icon {
        max-width: var(--counter-font-size);
    }
</style>