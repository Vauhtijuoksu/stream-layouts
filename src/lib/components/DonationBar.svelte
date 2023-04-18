<script lang="ts">
	import { donationSum } from "$lib/stores/DonationsStore";
    import { metadata } from "$lib/stores/GameStore";

    $: fillWidth = `${Math.min(1, $donationSum / $metadata?.donation_goal) * 100}%`;
</script>

<div class="donationbar">
    <div class="fill" style="width: {fillWidth}"></div>
    <div class="current">{$donationSum}</div>
    <div class="target">{$metadata?.donation_goal}</div>
</div>

<style>
    .donationbar {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--donation-bar-background, black);
        padding: var(--donation-bar-padding);
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