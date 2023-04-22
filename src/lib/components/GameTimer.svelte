<script lang="ts">
	import { onMount } from "svelte";
    import { currentGame, metadata } from "$lib/stores/GameStore";
	import { dateRangeToDuration } from "$lib/utils/time";

    export let index = 0;
    export let icon = '/images/stopwatch.png';

    $: start_time = $metadata?.timers[index].start_time;
    $: end_time = $metadata?.timers[index].end_time;
    let estimate = {hours: 0, minutes: 0};
    $: if ($currentGame) {
        ({hours: estimate.hours, minutes: estimate.minutes} = dateRangeToDuration($currentGame.start_time, $currentGame.end_time))
    };

    let hours = " 0";
    let minutes = "00";
    let seconds = "00";
    let millis = "00";

    const reset = () => {
        hours = " 0";
        minutes = "00";
        seconds = "00";
        millis = "0";
    };

    const pad = (num: number, pad='0', padLength=2) => num.toString().padStart(padLength, pad);

    onMount(() => {
        const interval = setInterval(() => {
            let start = start_time ? start_time : new Date();
            let end = end_time ? end_time : new Date();
            let {
                hours: hours_,
                minutes: minutes_,
                seconds: seconds_,
                millis: millis_
            } = dateRangeToDuration(start, end);
            hours = pad(hours_, ' ');
            minutes = pad(minutes_);
            seconds = pad(seconds_)
            millis = Math.floor(millis_ / 100).toString();
        }, 10);

        return () => {
            clearInterval(interval);
        }
    });
</script>

<div class="clock">
    {#if icon}
    <div class="icon">
        <img src="{icon}" alt="timer" />
    </div>
    {/if}
    <div class="time">
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
            <div class="digit small">{millis}</div>
        </div>
        <div class="estimate">
            Arvio: {#if estimate.hours}{estimate.hours}h {/if}{estimate.minutes}min
        </div>
    </div>
</div>

<style>
    .clock {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .estimate {
        font-size: var(--timer-estimate-font-size);
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
