<script lang="ts">
	import { onMount } from "svelte";
    import { currentGame, metadata } from "$lib/stores/GameStore";
	import { dateRangeToDuration, millisToDuration } from "$lib/utils/time";
	import type { Timer } from "$lib/models/Timer";

    export let name = '1';
    export let icon = '/images/timer.png';
    export let showEstimate = true;
    export let showIcon = true;
    export let showWhen: "always" | "stopped" = "always";
    export let timer: Timer | undefined = undefined;
    export let cls = '';

    $: if (name === '1' || name === '2') {
        timer = $metadata?.timers?.find(timer => timer.name === name);
    }

    $: start_time = timer?.start_time;
    $: end_time = timer?.end_time;

    let estimate = {hours: 0, minutes: 0};
    $: if ($currentGame) {
        ({hours: estimate.hours, minutes: estimate.minutes} = dateRangeToDuration($currentGame.start_time, $currentGame.end_time))
    };

    let hours = " 0";
    let minutes = "00";
    let seconds = "00";
    let millis = "00";

    let stopped = false;

    $: show = (showWhen === "always") || stopped;

    const reset = () => {
        hours = " 0";
        minutes = "00";
        seconds = "00";
        millis = "0";
    };

    const pad = (num: number, pad='0', padLength=2) => num.toString().padStart(padLength, pad);

    let timeout: string | number | NodeJS.Timeout | undefined;
    const cycle = () => {
        let start = start_time?.getTime() ?? Date.now();
        if (end_time) {
            stopped = true;
        } else {
            stopped = false;
        }
        let end = end_time?.getTime() ?? Date.now();
        let {
            hours: hours_,
            minutes: minutes_,
            seconds: seconds_,
            millis: millis_
        } = millisToDuration(end - start);
        hours = pad(Math.max(hours_, 0), ' ');
        minutes = pad(Math.max(minutes_, 0));
        seconds = pad(Math.max(seconds_, 0))
        millis = Math.floor(Math.max(millis_, 0) / 100).toString();
        timeout = setTimeout(cycle, 30);
    };

    onMount(() => {
        cycle();

        return () => {
            clearTimeout(timeout);
        }
    });
</script>

{#if show}
<div class="clock" id="{timer?.name}">
    {#if icon && showIcon}
    <div class="icon">
        <img src="{icon}" alt="timer" />
    </div>
    {/if}
    <div class="time {cls}">
        <div class="numbers" class:stopped>
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
        {#if showEstimate}
        <div class="estimate">
            Arvio: 
            {#if estimate.hours}
                {estimate.hours}h 
            {/if}{
            estimate.minutes}min
        </div>
        {/if}
    </div>
</div>
{/if}

<style>
    .clock {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .icon > img {
        max-width: 100px;
        margin-right: -20px;
    }

    .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .screentimer {
        font-size: var(--screen-timer-font-size, var(--font-size-md));
        color: var(--screen-timer-color);
        text-shadow:
                -3px -3px 0 var(--screen-overlay-item-stroke-color),
                3px -3px 0 var(--screen-overlay-item-stroke-color),
                -3px 3px 0 var(--screen-overlay-item-stroke-color),
                3px 3px 0 var(--screen-overlay-item-stroke-color),
                -3px 0px 0 var(--screen-overlay-item-stroke-color),
                3px 0px 0 var(--screen-overlay-item-stroke-color),
                0px 3px 0 var(--screen-overlay-item-stroke-color),
                0px -3px 0 var(--screen-overlay-item-stroke-color);

    }

    .screentimer > .stopped {
        color: var(--stopped-screen-timer-color, #888);
    }
    .stopped {
        color: var(--stopped-timer-color, #345);
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
        width: .3em;
        font-size: var(--timer-font-size);
        align-self: center;
    }

    .digit.small {
        font-size: var(--timer-millis-font-size);
    }
</style>
