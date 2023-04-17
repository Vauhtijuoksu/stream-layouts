<script lang="ts">
	import { onMount } from "svelte";
    export let displaySeconds = false;

    let time = new Date();

    const pad = (num: number) => num.toString().padStart(2, '0');

    $: hours = pad(time.getHours());
    $: minutes = pad(time.getMinutes());
    $: seconds = pad(time.getSeconds());

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });
</script>

<div class="clock">
    <div class="hours">
        {hours}
    </div>
    <div class="colon">:</div>
    <div class="minutes">
        {minutes}
    </div>
    {#if displaySeconds}
    <div class="colon">:</div>
    <div class="seconds">
        {seconds}
    </div>
    {/if}
</div>

<style>
    .clock {
        display: flex;
        flex-direction: row;
    }

    .clock > div {
        display: block;
        font-size: 34px;
    }

    .colon {
        width: .5em;
    }

    .hours, .minutes, .seconds {
        width: 2em;
    }
</style>