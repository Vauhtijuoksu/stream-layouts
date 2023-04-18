<script lang="ts">
	import type { Timer } from "$lib/models/Timer";
	import { onMount } from "svelte";
    import { metadata } from "$lib/stores/GameStore";
	import { derived } from "svelte/store";

    export let index = 0;

    $: start_time = $metadata?.timers[index].start_time;
    $: end_time = $metadata?.timers[index].end_time;

    let hours = "00";
    let minutes = "00";
    let seconds = "00";
    let millis = "00";

    const pad = (num: number) => num.toString().padStart(2, '0');

    const reset = () => {
        hours = "00";
        minutes = "00";
        seconds = "00";
        millis = "00";
    };

    onMount(() => {
        const interval = setInterval(() => {
            let start = start_time ? start_time : new Date();
            let end = end_time ? end_time : new Date();

            const diff = end.getTime() - start.getTime();
            hours = pad(Math.floor(diff / 3600000));
            minutes = pad(Math.floor(diff / 60000) % 60);
            seconds = pad(Math.floor(diff / 1000) % 60);
            millis = pad(Math.floor(diff % 1000 / 10));
        }, 10);

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
    <div class="colon">:</div>
    <div class="seconds">
        {seconds}
    </div>
    <div class="colon">.</div>
    <div class="millis">
        {millis}
    </div>
</div>

<style>
    .clock {
        display: flex;
        flex-direction: row;
        justify-content: center;
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

    .millis {
        font-size: 16px;
        width: 2em;
    }
</style>
