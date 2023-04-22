<script lang="ts">
	import type { Timer } from "$lib/models/Timer";
	import { onMount } from "svelte";
    import { metadata } from "$lib/stores/GameStore";
	import { derived } from "svelte/store";

    export let index = 0;

    $: start_time = $metadata?.timers[index].start_time;
    $: end_time = $metadata?.timers[index].end_time;

    let hours = " 0";
    let minutes = "00";
    let seconds = "00";
    let millis = "00";

    const pad = (num: number, pad='0') => num.toString().padStart(2, pad);

    const reset = () => {
        hours = " 0";
        minutes = "00";
        seconds = "00";
        millis = "00";
    };

    onMount(() => {
        const interval = setInterval(() => {
            let start = start_time ? start_time : new Date();
            let end = end_time ? end_time : new Date();

            const diff = end.getTime() - start.getTime();
            hours = pad(Math.floor(diff / 3600000), ' ');
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
    <div class="icon">
        <img src="/images/stopwatch.png" />
    </div>
    <div class="numbers">
        <div class="digit tenhour">{hours[0]}</div>
        <div class="digit">{hours[1]}</div>
        <div class="colon">:</div>
        <div class="digit">{minutes[0]}</div>
        <div class="digit">{minutes[1]}</div>
        <div class="colon">:</div>
        <div class="digit">{seconds[0]}</div>
        <div class="digit">{seconds[1]}</div>
        <div class="colon">.</div>
        <div class="digit small">{millis[0]}</div>
        <div class="digit small">{millis[1]}</div>
    </div>
</div>

<style>
    .clock {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .numbers {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }

    .digit {
        width: .7em;
        font-size: var(--timer-font-size);
    }

    .digit.tenhour {
        width: .4em;
    }

    .colon {
        width: .4em;
        font-size: var(--timer-font-size);
        align-self: center;
    }

    .digit.small {
        font-size: var(--timer-millis-font-size);
    }
</style>
