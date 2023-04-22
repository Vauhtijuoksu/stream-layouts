<script lang="ts">
    import { currentGame } from "$lib/stores/GameStore";
    $: img_filename = $currentGame?.img_filename;
    $: game = $currentGame?.game;
    $: category = $currentGame?.category;
    $: device = $currentGame?.device;
    $: deviceImg = device?.replaceAll(' ', '').toLowerCase();
    $: published = $currentGame?.published;
</script>

<div class="gamedata">
    <div class="icon">
        <img src="/gameicons/{img_filename}"  alt="{img_filename}"/>
    </div>
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
    <div class="icon">
        <img src="/consoles/{deviceImg}.png" alt="{device}" />
    </div>
    <div class="consoleinfo">
        <div class="device">
            {device}
        </div>
        <div class="published">
            {published}
        </div>
    </div>
</div>

<style>
    .gamedata, .consoledata {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .icon > img {
        max-height: 180px;
    }

    .gameinfo, .consoleinfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .gametitle, .published {
        font-size: var(--game-title-font-size, 34px);
    }
    .category, .device {
        font-size: var(--game-category-font-size, 24px);
    }
</style>
