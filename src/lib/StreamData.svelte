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
    export let donoUpdateFreq = 5000;

    async function updateAll() {
        let players = await client.getPlayers();
        let games = await client.getGames();
        let meta = await client.getMetadata();
        metadata.set(meta);
        playerdata.set(players);
        gamedata.set(games);
    }

    async function updateDonos() {
        let donations = await client.getDonations();
        let incentives = await client.getIncentives();
        incentivestore.set(incentives);
        donationstore.set(donations);
    }

    onMount(async () => {
        const gameInterval = setInterval(updateAll, updateFreq);
        const donoInterval = setInterval(updateDonos, donoUpdateFreq);
        updateAll();
        updateDonos();
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
