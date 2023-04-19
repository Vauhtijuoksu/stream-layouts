<script lang="ts">
	import type { LayoutField } from "$lib/models/LayoutConf";
	import type { ComponentType } from "svelte";

	import Clock from "./Clock.svelte";
	import GameTimer from './GameTimer.svelte';
	import PlayerName from './PlayerName.svelte';
	import GameData from './GameData.svelte';
	import Upcoming from './Upcoming.svelte';
	import DonationBar from './DonationBar.svelte';
	import Incentives from './Incentives.svelte';

    const components: {[key: string]: ComponentType} = {
        clock: Clock,
        timer: GameTimer,
        playername: PlayerName,
        gamedata: GameData,
        upcoming: Upcoming,
        donation_bar: DonationBar,
        incentives: Incentives,
    };

    export let field: LayoutField;

    let component = components[field.component];
</script>

{#if component}
    <svelte:component this={component} {...field.params}>
    {#each field.contents || [] as innerField}
        <svelte:self field={innerField} />
    {/each}
    </svelte:component>
{:else if field.component === 'raw'}
    {field.raw}
{:else}
    <svelte:element this={field.component} {...field.params}>
        {#each field.contents || [] as innerField}
            <svelte:self field={innerField} />
        {/each}
    </svelte:element>
{/if}

<style>
    .col {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow: hidden;
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
    }
</style>
