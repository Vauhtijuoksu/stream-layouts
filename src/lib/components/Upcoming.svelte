<script lang="ts">
    import { gamedata, metadata, playerdata } from "$lib/stores/GameStore";
	import { derived } from "svelte/store";

    export let n = 4;

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
    );
    function playerNames(pids: string[]) {
        return $playerdata
            .filter((p) => pids.includes(p.id))
            .map((p) => p.display_name)
            .join(' & ');
    }
</script>

<h1>Seuraana vuorossa</h1>
<div class="upcoming">
    {#each $upcoming as game}
        <div class="game">
            <div class="title">{game.game}</div>
            <div class="time">{game.start_time.toLocaleTimeString("fi-FI", {hour: '2-digit', minute: '2-digit'})}</div>
        </div>
        <div class="players">
            {playerNames(game.players)}
        </div>
    {/each}
</div>

<style>
    .upcoming {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .game {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: var(--font-size-lg);
    }

    .players {
        font-size: var(--font-size-md);
        align-self: flex-start;
    }
</style>