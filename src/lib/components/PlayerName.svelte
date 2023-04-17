<script lang="ts">
    import { currentPlayers } from "$lib/stores/GameStore";

    export let index = 0;

    $: player = $currentPlayers.at(index);
</script>

<div class="playername">
    {player?.display_name}
</div>
