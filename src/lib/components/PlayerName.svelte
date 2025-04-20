<script lang="ts">
    import { currentPlayers } from "$lib/stores/GameStore";
    import { currentCasters } from "$lib/stores/GameStore";

    export let caster = false;
    export let index = -1;
    let text = '';
    $: if (index == -1) {
        text = caster ? $currentCasters?.map((p) => p.display_name).join(', ') : $currentPlayers?.map((p) => p.display_name).join(', ');
    } else {
        text = caster ? $currentCasters[index]?.display_name : $currentPlayers[index]?.display_name;
    }
</script>
<div class="playername">
    {text}
</div>

<style>
    .playername {
        font-size: var(--playername-font-size);
        flex-grow: 1;
        width: 50%;
        text-align: left;
    }
</style>