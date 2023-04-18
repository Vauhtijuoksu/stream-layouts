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
	import Col from "./Col.svelte";
	import Row from "./Row.svelte";

    const components: {[key: string]: ComponentType} = {
        clock: Clock,
        timer: GameTimer,
        playername: PlayerName,
        gamedata: GameData,
        upcoming: Upcoming,
        donation_bar: DonationBar,
        incentives: Incentives,
        col: Col,
        row: Row,
    };

    export let field: LayoutField;

    let component = components[field.component];
</script>

<svelte:component this={component} {...field.params}>
{#each field.contents || [] as innerField}
    <svelte:self field={innerField} />
{/each}
</svelte:component>
