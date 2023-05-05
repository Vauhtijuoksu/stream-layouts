<script lang="ts">
	import type { Incentive } from "$lib/models/Incentive";
	import { getGame } from "$lib/stores/GameStore";
	import Pill from "./Pill.svelte";
	import { onMount } from "svelte";

  export let title = "Tuleva kannustin:";
  export let delay = 5000;
  export let incentives: Incentive[] = [];
  let current = 0;
  $: incentive = incentives[current];

  onMount(() => {
    const interval = setInterval(() => {
      current = (current + 1) % incentives.length;
    }, delay)

    return () => clearInterval(interval);
  });

  function statusSorted() {
    return (incentive?.status ?? []).slice().sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0));
  }

</script>


{#key incentive}
  <span class="incentive">{title} {getGame(incentive?.game_id)?.game ?? ''} - {incentive?.title}</span>
{#each statusSorted() as status}
  {#if status.type === 'milestone'}
  <Pill>{incentive?.total_amount} / {status.milestone_goal}€</Pill>
  {:else}
  <Pill>{status.option}: {status.amount}€</Pill>
  {/if}
{/each}
{/key}

<style>
  .incentive {
    font-size:  var(--donation-bar-info-font-size);
    margin-right: .75em;
    white-space: nowrap;
  }
</style>