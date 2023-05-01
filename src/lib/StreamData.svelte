<script lang="ts">
	import { onMount } from 'svelte';

    import type { LayoutField } from './models/LayoutConf';
	import type { ApiClient } from './ApiClient';
    import { gamedata, metadata, playerdata } from "./stores/GameStore";
	import { donationstore, incentivestore } from './stores/DonationsStore';
	import Container from './components/Container.svelte';

    export let client: ApiClient;
    export let contents: LayoutField[] = [];
    export let updateFreq = 1000;

    onMount(async () => {
        const gameInterval = setInterval(async () => {
            let {players, games, meta} = await client.getAll();
            metadata.set(meta);
            playerdata.set(players);
            gamedata.set(games);
        }, updateFreq);

        const donoInterval = setInterval(async () => {
            let donations = await client.getDonations();
            let incentives = await client.getIncentives();
            let meta = await client.getMetadata();

            metadata.set(meta);
            donationstore.set(donations);
            incentivestore.set(incentives);
        }, 5000)

        return () => {
            clearInterval(gameInterval);
            clearInterval(donoInterval);
        }
    });
</script>

<slot />
{#each contents as field}
    <Container {field} />
{/each}
