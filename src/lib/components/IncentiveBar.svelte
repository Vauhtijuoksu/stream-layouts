<script lang="ts">
	import type { Incentive } from "$lib/models/Incentive";
	import { upcomingIncentives } from "$lib/stores/DonationsStore";
	import { getGame } from "$lib/stores/GameStore";
	import Pill from "./Pill.svelte";
	import { onMount } from "svelte";

  export let title = "Tuleva kannustin:";
  export let delay = 5000;
  export let incentives: Incentive[] = $upcomingIncentives.slice(0, 5);

  let current = 0;
  $: incentive = incentives[current];

  onMount(() => {
    const interval = setInterval(() => {
      current = (current + 1) % incentives.length;
    }, delay)

    return () => clearInterval(interval);
  });

</script>


{#key incentive}
<span class="incentive">{title} {getGame(incentive?.game_id)?.game ?? ''} - {incentive?.title}</span>
{#each incentive?.status as status}
<Pill>{status.option}: {status.amount}€</Pill>
{/each}
{/key}

<style>
  .incentive {
    font-size: var(--font-size-md);
    margin-right: .75em;
  }
</style>