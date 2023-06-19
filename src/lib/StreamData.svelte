<script lang="ts">
    import {onDestroy, onMount} from 'svelte';

    import type { LayoutField } from './models/LayoutConf';
	import type { ApiClient } from './ApiClient';
    import { gamedata, metadata, playerdata } from "./stores/GameStore";
	import { donationstore, incentivestore } from './stores/DonationsStore';
	import { clockoffsetms } from './stores/ConfStore';
	import Container from './components/Container.svelte';

    export let client: ApiClient;
    export let contents: LayoutField[] = [];
    export let metaUpdateFreq = 500;
    export let gameUpdateFreq = 1000;
    export let donoUpdateFreq = 5000;
    export let syncFreq = 1000 * 60 * 10;

    let timeserver = "http://worldtimeapi.org/api/timezone/utc"

    async function updateMeta() {
        let meta = await client.getMetadata();
        metadata.set(meta);
    }
    async function updateGames() {
        let players = await client.getPlayers();
        let games = await client.getGames();
        playerdata.set(players);
        gamedata.set(games);
    }

    async function updateDonos() {
        let donations = await client.getDonations();
        let incentives = await client.getIncentives();
        incentivestore.set(incentives);
        donationstore.set(donations);
    }

    async function get_current_offset() {
        var pctime = Date.now();
        var diff = 0
        await fetch(timeserver)
            .then(r => r.json())
            .then(r => {
                let duration =  Date.now() - pctime;
                let servertime = new Date(r.datetime).getTime();
                diff = pctime - servertime + duration/2.0
            })
        return diff
    }

    async function syncTime(){
        let offsets = []
        for (let i = 0; i < 5; i++) {
            let ofs = await get_current_offset()
            offsets.push(ofs)
        }
        offsets.sort()
        let offset = await offsets[2]  // median
        clockoffsetms.set(offset);
    }

    onMount(() => {
        const metaInterval = setInterval(updateMeta, metaUpdateFreq);
        const gameInterval = setInterval(updateGames, gameUpdateFreq);
        const donoInterval = setInterval(updateDonos, donoUpdateFreq);
        const syncInterval = setInterval(syncTime, syncFreq)
        syncTime()
        updateMeta();
        updateGames();
        updateDonos();
        return () => { // this never runs if onmount is async
            clearInterval(gameInterval);
            clearInterval(metaInterval);
            clearInterval(donoInterval);
            clearInterval(syncInterval);
        }
    });
</script>

<slot />
{#each contents as field}
    <Container {field} />
{/each}
