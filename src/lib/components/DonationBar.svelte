<script lang="ts">
	import { donationSum, donationstore, upcomingIncentives } from '$lib/stores/DonationsStore';
	import { metadata } from '$lib/stores/GameStore';
	import { circOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import Marquee from 'svelte-fast-marquee';
	import Pill from './Pill.svelte';
	import { onMount } from 'svelte';

	const displays = ['donationbar', 'incentives'];
	let i = 0;
	$: display = displays[i];
	let delay = 10000;

	$: fillWidth = `${Math.min(1, $donationSumAnimated / $metadata?.donation_goal) * 100}%`;

	$: lastDonations = $donationstore.slice(0, 5);
	let donationSumAnimated = tweened($donationSum, {
		duration: 3000,
		easing: circOut
	});
	$: $donationSumAnimated = $donationSum;

	onMount(() => {
		let interval = setInterval(() => {
			i = (i + 1) % displays.length;
		}, delay);

		return () => clearInterval(interval);
	});
</script>

<div class="donationbar">
	<div class="current donationsum">{Math.floor($donationSumAnimated)} €</div>
	<div class="fill-container">
    <div class="fill" style="width: {fillWidth}" />
		{#if display === 'donationbar'}
			<div class="donationpills">
				<Marquee speed={50}>
					{#each lastDonations as donation}
						<Pill>{donation.name}: {donation.amount}€</Pill>
					{/each}
				</Marquee>
			</div>
		{:else if display === 'incentives'}
			<div class="incentives">
				<Marquee speed={5}>
					<span>Kannustimet:</span>
					{#each $upcomingIncentives.slice(0, 10) as incentive}
						<Pill>{incentive.title}: {incentive.total_amount}€</Pill>
					{/each}
				</Marquee>
			</div>
		{/if}
	</div>
	<div class="target donationsum">{$metadata?.donation_goal} €</div>
</div>

<style>
	.donationbar {
		position: relative;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		background-color: var(--donation-bar-background, black);
		padding: var(--donation-bar-padding);
		font-size: var(--donation-bar-font-size);
		border: var(--donation-bar-border-style) var(--donation-bar-border-width)
			var(--donation-bar-border-color);
		border-left: 0;
		border-right: 0;
	}

	.incentives {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.fill-container {
		flex-grow: 1;
		height: 100%;
		z-index: 5;
		margin-left: calc(0px - var(--donation-bar-border-radius) / 2);
		margin-right: calc(0px - var(--donation-bar-border-radius) / 2);
	}

	.fill {
		height: 100%;
		background-color: var(--donation-bar-fill);
		border-radius: var(--donation-bar-border-radius, var(--border-radius));
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.donationsum {
		margin-top: calc(0px - var(--donation-bar-border-width));
		margin-bottom: calc(0px - var(--donation-bar-border-width));
		border-color: var(--donation-bar-border-color, var(--border-color));
		border-width: var(--donation-bar-border-width, var(--border-width));
		border-radius: var(--donation-bar-border-radius, var(--border-radius));
		border-style: var(--donation-bar-border-style, var(--border-style));
		display: flex;
		align-items: center;
		height: 100%;
		box-sizing: content-box;
		z-index: 10;
	}

	.current {
		left: 0;
		color: var(--donation-bar-current-font-color);
		background-color: var(--donation-bar-current-bg);
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-left: none;
		display: flex;
		padding-left: 5px;
		padding-right: var(--donation-bar-border-radius, var(--border-radius));
		align-items: center;
	}

	.target {
		right: 0;
		color: var(--donation-bar-goal-font-color);
		background-color: var(--donation-bar-goal-bg);
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-right: none;
		padding-right: 5px;
		padding-left: var(--donation-bar-border-radius, var(--border-radius));
	}
	.donationpills {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
	}
</style>
