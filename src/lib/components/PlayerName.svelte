<script lang="ts">
    import { currentPlayers } from "$lib/stores/GameStore";

    export let index = -1;
    let text = '';
    $: if (index == -1) {
        text = $currentPlayers?.map((p) => p.display_name).join(', ');
    } else {
        text = $currentPlayers[index]?.display_name;
    }
</script>

<div class="playername">
    {text}
</div>

<style>
    .playername {
        font-size: var(--playername-font-size);
    }
</style>