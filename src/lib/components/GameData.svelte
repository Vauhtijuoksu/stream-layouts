<script lang="ts">
    import { hideGameData } from "$lib/stores/ConfStore";
    import { currentGame } from "$lib/stores/GameStore";
	import ConsoleIcon from "./ConsoleIcon.svelte";
	import GameIcon from "./GameIcon.svelte";
    export let showGameIcon = true;;
    export let align = "right";

    $: img_filename = $currentGame?.img_filename;
    $: game = $currentGame?.game;
    $: category = $currentGame?.category;
    $: device = $currentGame?.device;
    $: deviceImg = device?.replaceAll(' ', '').toLowerCase() ?? 'default';
    $: published = $currentGame?.published;


</script>

{#if !$hideGameData}
<div class="gamedata {align} ">
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
    <div class="consoleinfo">

        <div class="console icon">
            <ConsoleIcon
              img_filename="{deviceImg}.png"
              img_alt="{device}"
              ></ConsoleIcon>
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

    .gameinfo, .consoleinfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    .gameinfo{
        padding-left: var(--game-icon-padding, 0);
        align-items: flex-start;
    }
    .consoleinfo{
        align-items: center;
    }
    .gametitle, .published {
        font-size: var(--game-title-font-size, 34px);
		letter-spacing: var(--letter-spacing);
        text-align: right;
    }
    .gametitle{
        line-height: 0.9em;
        margin-bottom: 0.1em;
    }
    .gametitle, .category {

        text-align: left;
    }
    .category, .device {
        font-size: var(--game-category-font-size, 24px);
		letter-spacing: var(--letter-spacing);
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
    .left{
        align-self: flex-start;
    }


</style>
