<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';

    import type { LayoutField } from './models/LayoutConf';
	import type { ApiClient } from './ApiClient';
    import { gamedata, metadata, playerdata } from "./stores/GameStore";
	import Clock from "./components/Clock.svelte";
	import GameTimer from './components/GameTimer.svelte';
    
    
    export let client: ApiClient;
    export let fields: Array<LayoutField> = [];
    
    const components: {[key: string]: ComponentType} = {
        clock: Clock,
        timer: GameTimer,
    };

    const getComponent = (name: string) => {
        return components[name];
    };

    onMount(async () => {
        let {players, games, meta} = await client.getAll()
        console.log(meta);
        gamedata.set(games);
        playerdata.set(players);
        metadata.set(meta);
    });
</script>

{#each fields as field}
    <div>
        <svelte:component this={getComponent(field.component)} {...field.data} />
    </div>
{/each}
