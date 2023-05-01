<script lang="ts">
    import { hideGameData } from "$lib/stores/ConfStore";
    import { currentGame } from "$lib/stores/GameStore";
	import GameIcon from "./GameIcon.svelte";
    export let showGameIcon = true;

    $: img_filename = $currentGame?.img_filename;
    $: game = $currentGame?.game;
    $: category = $currentGame?.category;
    $: device = $currentGame?.device;
    $: deviceImg = device?.replaceAll(' ', '').toLowerCase();
    $: published = $currentGame?.published;


</script>

{#if $hideGameData}
<div class="hidegame">
    <div class="console icon">
        <img src="/consoles/default.png" alt="mystery" />
    </div>
</div>
{:else}
<div class="gamedata">
    {#if showGameIcon}
    <GameIcon {img_filename} />
    {/if}
    <div class="gameinfo">
        <div class="gametitle">
            {game}
        </div>
        <div class="category">
            {category}
        </div>
    </div>
</div>

<div class="consoledata">
    <div class="console icon">
        <img src="/consoles/{deviceImg}.png" onerror="this.src = '/consoles/default.png'" alt="{device}" />
    </div>
    <div class="consoleinfo">
        <div class="device" class:shortestname={(device?.length ?? 0) <= 3} class:shortername={(device?.length ?? 0) <= 4} class:shortname={(device?.length ?? 0) <= 5} >
            {device}
        </div>
        <div class="published">
            {published}
        </div>
    </div>
</div>
{/if}


<style>
    .hidegame {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .gamedata, .consoledata {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .console.icon > img {
        max-height: 120px;
    }

    .gameinfo, .consoleinfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    .consoleinfo{
        align-items: center;
    }
    .gametitle, .published {
        font-size: var(--game-title-font-size, 34px);
        text-align: right;
    }
    .category, .device {
        font-size: var(--game-category-font-size, 24px);
    }

    .category {
        text-align: right;
    }
    .shortname {
        font-size: 32px;
    }
    .shortername {
        font-size: 38px;
    }
    .shortestname {
        font-size: 50px;
    }


</style>
