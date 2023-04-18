<script lang="ts">
    import { gamedata, metadata } from "$lib/stores/GameStore";
	import { derived } from "svelte/store";

    export let n = 5;

    const upcoming = derived(
        [gamedata, metadata],
        ([$games, $meta]) => {
            const i = $games.findIndex((g) => g.id === $meta?.current_game_id);
            if (i >= 0) {
                return $games.slice(i, i + n);
            } else {
                return [];
            }
        }
    )
</script>

<div class="upcoming">
    {#each $upcoming as game}
        <div class="game">
            <div class="title">{game.game}</div>
            <div class="time">{game.start_time.toLocaleTimeString("fi-FI", {hour: '2-digit', minute: '2-digit'})}</div>
        </div>
    {/each}
</div>

<style>
    .game {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>