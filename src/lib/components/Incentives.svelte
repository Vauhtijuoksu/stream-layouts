<script lang="ts">
	import type { IncentiveStatus } from '$lib/models/Incentive';
	import { upcomingIncentives } from '$lib/stores/DonationsStore';
	import { gamedata } from '$lib/stores/GameStore';
	import { onMount } from 'svelte';
	import IncentiveBar from './IncentiveBar.svelte';
	import { fade } from 'svelte/transition';
	import Pill from './Pill.svelte';

	export let n = 10;

	let i = 0;
	$: incentive = $upcomingIncentives[i % Math.min(n, $upcomingIncentives.length)];

	function game(game_id?: string) {
		return $gamedata.find((g) => g.id === game_id);
	}

	function relAmount(status: IncentiveStatus[], amount: number = 0) {
		const max = Math.max(...status.map((s) => s.amount ?? 0));
		if (max === 0) return '0';
		return `${(amount / max) * 100}%`;
	}

	function statusSorted() {
   		return (incentive?.status ?? []).slice().sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0));
  	}

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
		}, 5000);

		return () => clearInterval(interval);
	})
</script>

<div class="incentives">
  <h1>Tulevat kannustimet</h1>
	<div class="incentive-wrapper">
	{#key incentive?.id}
	<div class="incentive" out:fade={{duration:500}} in:fade={{duration: 500, delay: 500}}>
		<div class="gametitle">
			{game(incentive?.game_id)?.game ?? ''}
		</div>
		<div class="title">
			{incentive?.title}
		</div>
		<div class="options">
			{#if incentive?.status?.length}
				<div class="options">
				{#each statusSorted() as option}
					{#if incentive.type === 'milestone'}
					<Pill>
						{incentive.total_amount} / {option.milestone_goal}€
					</Pill>
					{:else}
						<Pill>
							{option.option}: {option.amount}€
						</Pill>
						{/if}
						{/each}
					</div>
			{:else}
				Ei vielä ehdotuksia!
			{/if}
		</div>
		<div class="icon">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/gameicons/{game(incentive?.game_id)?.img_filename}" />
		</div>
	</div>
	{/key}
		
	</div>
	<div class="link">
		vauhtijuoksu.fi/kannustimet
	</div>
</div>

<style>
	.incentives {
		display: flex;
		flex-direction:column;
		justify-content: space-between;
	}
	.incentive-wrapper {
		height: 320px;
		overflow: hidden;
	}
	.options {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.gametitle {
		font-size: var(--font-size-lg);
	}
	.icon {
		margin: -20px;
	}
	.icon img {
		max-height: 200px;
	}
	.title {
		font-size: var(--font-size-md);
	}
	.link {
		font-size: var(--font-size-lg);
	}
</style>
