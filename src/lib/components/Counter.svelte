<script lang="ts">
	import { metadata } from "$lib/stores/GameStore";

    let icon = '/images/counter.png';

    $: count = $metadata?.counters[0];
</script>

<div class="counter">
    <img class="icon" src={icon} alt="counter" />
    <div class="number">
        {count}
    </div>
</div>

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