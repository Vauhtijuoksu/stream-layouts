<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';

    import type { LayoutField } from './models/LayoutConf';
	import type { ApiClient } from './ApiClient';
    import { gamedata, metadata, playerdata } from "./stores/GameStore";
	import { donationstore, incentivestore } from './stores/DonationsStore';

	import Clock from "./components/Clock.svelte";
	import GameTimer from './components/GameTimer.svelte';
	import PlayerName from './components/PlayerName.svelte';
	import GameData from './components/GameData.svelte';
	import Upcoming from './components/Upcoming.svelte';
	import DonationBar from './components/DonationBar.svelte';
	import Incentives from './components/Incentives.svelte';
    
    
    export let client: ApiClient;
    export let fields: Array<LayoutField> = [];
    export let updateFreq = 5000;
    
    const components: {[key: string]: ComponentType} = {
        clock: Clock,
        timer: GameTimer,
        playername: PlayerName,
        gamedata: GameData,
        upcoming: Upcoming,
        donation_bar: DonationBar,
        incentives: Incentives,
    };

    const getComponent = (name: string) => {
        return components[name];
    };

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
        }, 10000)

        return () => {
            clearInterval(gameInterval);
            clearInterval(donoInterval);
        }
    });
</script>

{#each fields as field}
    <div style="width: {field.layout.width}; height: {field.layout.height};">
        <svelte:component this={getComponent(field.component)} {...field.data} />
    </div>
{/each}
