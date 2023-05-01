<script lang="ts">
	import { currentPlayers } from "$lib/stores/GameStore";
	import GridItem from "./GridItem.svelte";
	import PositioningGrid from "./PositioningGrid.svelte";
  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;
</script>

<PositioningGrid {left} {right} {top} {bottom}>
  {#each $currentPlayers as player, i}
    <GridItem {i}>
      {player.display_name}
    </GridItem>
  {/each}
</PositioningGrid>
