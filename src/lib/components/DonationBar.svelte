<script lang="ts">
	import { donationSum } from "$lib/stores/DonationsStore";
    import { metadata } from "$lib/stores/GameStore";

    $: fillWidth = `${Math.min(1, $donationSum / $metadata?.donation_goal) * 100}%`;
</script>

<div class="bar">
    <div class="current">{$donationSum}</div>
    <div class="fill" style="width: {fillWidth}"></div>
    <div class="target">{$metadata?.donation_goal}</div>
</div>

<style>
    .bar {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: black;
    }

    .fill {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: green;
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