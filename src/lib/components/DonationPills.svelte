<script lang="ts">
	import type { Donation } from "$lib/models/Donation";
	import Marquee from "svelte-fast-marquee";
	import Pill from "./Pill.svelte";
  export let donations: Donation[] = [];

  function ageInMinutes(date: Date) {
    return (new Date().getTime() - date.getTime()) / (1000 * 60);
  }
</script>


{#each donations as donation, i}
  {#if i < 3}
  <Pill style="fancy">{donation.name}: {donation.amount}€</Pill>
  {:else}
  <Pill>{donation.name}: {donation.amount}€</Pill>
  {/if}
{/each}
