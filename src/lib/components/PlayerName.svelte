<script lang="ts">
    import { currentPlayers } from "$lib/stores/GameStore";

    export let index = 0;

    $: player = $currentPlayers.at(index);
</script>

<div class="playername">
    {player?.display_name}
</div>

<style>
    .playername {
        padding: var(--playername-padding, var(--padding));
        background-color: var(--playername-background);
        font-size: var(--playername-font-size);
        border-style: var(--playername-border-style, var(--border-style));
        border-color: var(--playername-border-color, var(--border-color));
        border-width: var(--playername-border-width, var(--border-width));
        border-radius: var(--playername-border-radius, var(--border-radius));
    }
</style>