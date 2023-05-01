<script lang="ts">
	import { donationstore, lastDonation } from "$lib/stores/DonationsStore";
	import Marquee from "svelte-fast-marquee";
	import Pill from "./Pill.svelte";

    $: console.log($lastDonation);

  	$: lastDonations = $donationstore.slice(0, 5);
</script>


<Marquee speed={50}>
  {#each lastDonations as donation}
    <Pill>{donation.name}: {donation.amount}€</Pill>
  {/each}
</Marquee>
