<script lang="ts">
    import { gamedata, metadata, playerdata } from "$lib/stores/GameStore";
	import { derived } from "svelte/store";

    export let n = 4;
    export let style = 'list';
    export let offset = 1;

    const upcoming = derived(
        [gamedata, metadata],
        ([$games, $meta]) => {
            const i = $games.findIndex((g) => g.id === $meta?.current_game_id);
            if (i >= 0) {
                return $games.slice(i + offset, i + offset + n);
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

{#if style === "list"}
<h1>Seuraana vuorossa</h1>
<div class="list">
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
{:else if style === "bar"}
<div class="row">
    {#each $upcoming as game, i}
    <div class="game">
        {game.start_time.toLocaleTimeString("fi-FI", {hour: '2-digit', minute: '2-digit'})}
        -
        {game.game} - {game.category} - {playerNames(game.players)}
    </div>
    {#if i+1 < $upcoming.length}
    <div class="divider">&#x2747;</div>
    {/if}
    {/each}
</div>
{/if}

<style>
    .list {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .list > .game {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: var(--font-size-lg);
    }

    .list > .players {
        font-size: var(--font-size-md);
        align-self: flex-start;
    }

    .row {
        gap: 10px;
        align-items: baseline;
    }

    .row > .game, .row >.divider {
        white-space: nowrap;
        font-size: var(--font-size-md);
    }
</style>