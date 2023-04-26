<script lang="ts">
    import { currentPlayers } from "$lib/stores/GameStore";

    export let index = 0;
    export let left = true;

    $: player = $currentPlayers.at(index);
</script>

<div class="playernameWrapper" class:left>
    <div class="playername">
        {player?.display_name}
    </div>
</div>

<style>
    .playernameWrapper {
        padding: var(--playername-padding, var(--padding));
        background-color: var(--playername-background);
        border-style: var(--playername-border-style, var(--border-style));
        border-color: var(--playername-border-color, var(--border-color));
        border-width: var(--playername-border-width, var(--border-width));
        border-radius: var(--playername-border-radius, var(--border-radius));
    }
    .playernameWrapper.left {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
    }
    .playername {
        font-size: var(--playername-font-size);
    }
</style>