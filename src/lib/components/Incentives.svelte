<script lang="ts">
	import type { IncentiveStatus } from '$lib/models/Incentive';
	import { upcomingIncentives } from '$lib/stores/DonationsStore';
	import { gamedata } from '$lib/stores/GameStore';

	export let n = 4;

	function game(game_id: string) {
		return $gamedata.find((g) => g.id === game_id);
	}

	function relAmount(status: IncentiveStatus[], amount: number = 0) {
		const max = Math.max(...status.map((s) => s.amount ?? 0));
		if (max === 0) return '0';
		return `${(amount / max) * 100}%`;
	}
</script>

<div class="incentives">
  <h1>Tulevat kannustimet</h1>
	{#each $upcomingIncentives as incentive, i}
		{#if i < n}
			<div class="incentive">
				<div class="header">
					<div class="title">{game(incentive.game_id)?.game}: <i>{incentive.title}</i></div>
					<div class="amount">{incentive.total_amount}</div>
				</div>
				{#if incentive.type === 'milestone'}
					{#each incentive.milestones ?? [] as milestone}
						<div class="milestone">
							<div class="option-bar" style="width: {milestone / incentive.total_amount * 100}%">
                {incentive.total_amount} / {milestone}
              </div>
						</div>
					{/each}
				{:else if incentive.type === 'option'}
					{#each incentive.status ?? [] as status}
						<div class="option">
							<div class="option-label">
								{status.option}
							</div>
							<div class="option-bar" style="width: {relAmount(incentive.status, status.amount)};">
								{status.amount}
							</div>
						</div>
					{/each}
				{:else if incentive.type === 'open'}
          {#each incentive.status ?? [] as status}
            <div class="option">
              <div class="option-label">
                {status.option}
              </div>
              <div class="option-bar" style="width: {relAmount(incentive.status, status.amount)};">
                {status.amount}
              </div>
            </div>
          {/each}
				{/if}
			</div>
		{/if}
	{/each}
</div>

<style>
	.incentives {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.incentive + .incentive {
		margin-top: 5px;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.title {
		font-size: var(--font-size-md);
	}
	.amount {
		font-size: var(--font-size-md);
	}
	.game {
		font-size: var(--font-size-sm);
		align-self: flex-start;
	}

	.option,
	.milestone {
		display: flex;
		flex-direction: row;
		justify-content: start;
	}
	.option-label {
		padding-right: 5px;
	}

	.option-bar {
		background-color: var(--donation-bar-fill);
		padding-left: 5px;
		text-align: left;
	}
</style>
