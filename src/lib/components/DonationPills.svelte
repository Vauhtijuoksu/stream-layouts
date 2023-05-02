<script lang="ts">
	import type { Donation } from "$lib/models/Donation";
	import Marquee from "svelte-fast-marquee";
	import Pill from "./Pill.svelte";
  export let donations: Donation[] = [];
  export let fancyMaxAge = 200000000000;

  function ageInMinutes(date: Date) {
    return (new Date().getTime() - date.getTime()) / (1000 * 60);
  }
</script>


{#each donations as donation, i}
  {#if ageInMinutes(donation.timestamp) < fancyMaxAge }
  <div class="donate fancy">{donation.name}: {donation.amount}€</div>
  {:else}
  <div class="donate">{donation.name}: {donation.amount}€</div>
  {/if}
  <img class="divider" src="/images/divider.png" alt="divider" />
{/each}

<style>
  .donate{
    font-size:  var(--donation-bar-info-font-size);
    white-space: nowrap;
  }
  .divider{
    height: 32px;
    padding: 0 20px;
    text-shadow: none;
  }
  .fancy{
    animation: rainbow 6s linear;
    animation-iteration-count: infinite;

  }
@keyframes rainbow{
		100%,0%{
			color: #751520;
		}
		8%{
			color: #724914;
		}
		20%{
			color: #7b8633;
		}
		33%{
			color: #79981c;
		}
		58%{
			color: #016172;
		}
		91%{
			color: #732f37;
		}
}
</style>