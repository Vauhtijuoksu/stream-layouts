<script lang="ts">
	import { donationSum } from "$lib/stores/DonationsStore";
    import { metadata } from "$lib/stores/GameStore";
	import { circOut } from "svelte/easing";
	import { tweened } from "svelte/motion";

    $: fillWidth = `${Math.min(1, $donationSumAnimated / $metadata?.donation_goal) * 100}%`;

    let donationSumAnimated = tweened(
        $donationSum,
        {
            duration: 3000,
            easing: circOut,
        }
    );
    $: $donationSumAnimated = $donationSum;
</script>

<div class="donationbar">
    <div class="fill" style="width: {fillWidth}"></div>
    <div class="current donationsum">{Math.floor($donationSumAnimated)} €</div>
    <div class="target donationsum">{$metadata?.donation_goal} €</div>
</div>

<style>
    .donationbar {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--donation-bar-background, black);
        padding: var(--donation-bar-padding);
        color: var(--donation-bar-font-color);
    }

    .fill {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: var(--donation-bar-fill);
    }

    .current {
        position: absolute;
        left: 0;
    }

    .target {
        position: absolute;
        right: 0;
    }
</style>