<script lang="ts">
	import { donationSum, donationstore, latestDonations, upcomingIncentives } from '$lib/stores/DonationsStore';
	import { metadata } from '$lib/stores/GameStore';
	import { circOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import Marquee from 'svelte-fast-marquee';
	import Pill from './Pill.svelte';
	import { onMount } from 'svelte';
	import DonationPills from './DonationPills.svelte';
	import Motd from './Motd.svelte';
	import IncentiveBar from './IncentiveBar.svelte';
	import Upcoming from './Upcoming.svelte';
	import type { Donation } from '$lib/models/Donation';

	export let displays = ['upcoming', 'incentives', 'motd'];
	let i = 0;
	let display = get_display();
	let delay = 20000;

	let forcedDisplay = false;
	let forcedDisplayTimeout = -1;
	const forcedDisplayDelay = 30 * 1000;

	$: fillWidth = `${Math.min(1, $donationSumAnimated / $metadata?.donation_goal) * 100}%`;

	let donationSumAnimated = tweened($donationSum, {
		duration: 3000,
		easing: circOut
	});
	$: $donationSumAnimated = $donationSum;

	let donations: Donation[] = [];

	function get_display(){
		let checked = false
		while (!checked){
			if (displays[i] == "incentives" && $upcomingIncentives.length == 0){
				i = (i + 1) % displays.length;
				continue
			}
			checked = true
		}
		return displays[i]
	}

	onMount(() => {
		let interval = setInterval(() => {
			if (!forcedDisplay) {
				i = (i + 1) % displays.length;
				display = get_display();
			}
		}, delay);

		
		let unsub = latestDonations.subscribe((ds) => {
			donations = ds;
			display = 'donations';
			forcedDisplay = true;
			if (forcedDisplayTimeout) {
				clearTimeout(forcedDisplayTimeout);
			}
			forcedDisplayTimeout = setTimeout(() => {
				display = displays[i];
				forcedDisplay = false;
			}, forcedDisplayDelay);
		});

		return () => {
			clearInterval(interval);
			unsub();
		}
	});
</script>

<div class="donationbar">
	<div class="current donationsum">{Math.floor($donationSumAnimated)} €</div>
	<div class="fill-container">
		<div class="fill" style="width: {fillWidth}" ></div>
		<div class="fill-content">
			<div class="displayline {display === 'donations' ? 'showline' : 'hideline'}">
	   			<DonationPills {donations}/>
			</div>
			<div class="displayline {display === 'incentives' ? 'showline' : 'hideline'}">
			  	<IncentiveBar incentives={$upcomingIncentives.slice(0, 5)} />
			</div>
			<div class="displayline {display === 'motd' ? 'showline' : 'hideline'}">
			   	<Motd messages={$metadata?.donatebar_info} />
			</div>
			<div class="displayline {display === 'upcoming' ? 'showline' : 'hideline'}">
			   	<Upcoming style="bar" />
			</div>
		</div>
	</div>
	<div class="target donationsum">{$metadata?.donation_goal} €</div>
</div>

<style>
	.displayline{
		position: absolute;
		width: 100%;
		display: flex;
	}
    .showline{
		animation: show 0.5s ease-in-out;
        animation-fill-mode: forwards;
	}
	@keyframes show{
		0%		{ margin-top: -100px; } /* the barsize is hardcoded to bottombar.svelte. maybe fix later.. */
        100%	{ margin-top: 0; }
	}
	.hideline{
		animation: hide 0.5s ease-in-out;
		animation-fill-mode: forwards;
	}
	@keyframes hide{
		0%	{ margin-top: 0; }
		100%		{ margin-top: 100px; } /* the barsize is hardcoded to bottombar.svelte. maybe fix later.. */
	}

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

	.fill-content {
		padding-left: var(--border-radius);
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: left;
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow: hidden;
        text-shadow:
                -2px -2px 0 var(--donation-bar-background),
                2px -2px 0 var(--donation-bar-background),
                -2px 2px 0 var(--donation-bar-background),
                2px 2px 0 var(--donation-bar-background),
                -2px 0px 0 var(--donation-bar-background),
                2px 0px 0 var(--donation-bar-background),
                0px 2px 0 var(--donation-bar-background),
                0px -2px 0 var(--donation-bar-background);
	}

	.fill-container {
		position: relative;
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
		white-space: nowrap;
		margin-top: calc(0px - var(--donation-bar-border-width));
		margin-bottom: calc(0px - var(--donation-bar-border-width));
		border-color: var(--donation-bar-border-color, var(--border-color));
		border-width: var(--donation-bar-border-width, var(--border-width));
		border-radius: var(--donation-bar-border-radius, var(--border-radius));
		border-style: var(--donation-bar-border-style, var(--border-style));
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		box-sizing: content-box;
		z-index: 10;
		width: 120px;
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
		text-align: right;
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
</style>
