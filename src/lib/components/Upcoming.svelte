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
    <div class="gamerow">
        <div class="icon">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="/gameicons/{game.img_filename}" />
        </div>
        <div class="col">
            <div class="game">
                <div class="title">{game.game}</div>
                <div class="time">{game.start_time.toLocaleTimeString("fi-FI", {hour: '2-digit', minute: '2-digit'})}</div>
            </div>
            <div class="players">
                {playerNames(game.players)}
            </div>
        </div>
    </div>
    {/each}
</div>
{:else if style === "bar"}
<div class="row">
    {#each $upcoming as game, i}
    <div class="game">
        {game.start_time.toLocaleTimeString("fi-FI", {hour: '2-digit', minute: '2-digit'})}
        -
        {game.game} - {playerNames(game.players)}
    </div>
    {#if i+1 < $upcoming.length}
        <img class="divider" src="/images/divider.png" alt="divider" />
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
    .gamerow {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .gamerow .icon {
        display: flex;
        width: 140px;
        margin: -10px -10px -30px -10px;
    }
    .gamerow .icon > img {
        max-width: 100%;
    }
    .gamerow .col {
        flex-grow: 1;
    }
    .gamerow .game {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: var(--font-size-lg);
    }

    .gamerow .players {
        font-size: var(--font-size-md);
        align-self: flex-start;
        align-content: flex-start;
        text-align: start;
    }

    .row {
        gap: 10px;
        align-items: center;
    }

    .row > .game, .row >.divider {
        white-space: nowrap;
        font-size: var(--donation-bar-info-font-size);
    }
    .divider {
        height: 32px;
    }
</style>