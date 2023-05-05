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
      <span class="playername">
        {player?.display_name}
      </span>
    </GridItem>
  {/each}
</PositioningGrid>

<style>
  .playername {
    font-size: var(--screen-player-name-font-size, var(--font-size-md));
    color: var(--screen-player-name-font-color, var(--font-color));
    text-shadow: var(--screen-player-name-text-shadow);

  }
</style>