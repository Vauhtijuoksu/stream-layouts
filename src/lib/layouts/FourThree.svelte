<script lang="ts">
    import StreamLayout from "$lib/StreamLayout.svelte";
    import AbsDiv from "$lib/components/AbsDiv.svelte";
    import Counters from "$lib/components/Counters.svelte";
    import DonationBar from "$lib/components/DonationBar.svelte";
    import GameData from "$lib/components/GameData.svelte";
    import GameIcon from "$lib/components/GameIcon.svelte";
    import GameTimer from "$lib/components/GameTimer.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import PlayerName from "$lib/components/PlayerName.svelte";
    import PlayerNameWrapper from "$lib/components/PlayerNameWrapper.svelte";
    import PlayerNamesGrid from "$lib/components/PlayerNamesGrid.svelte";
    import Sponsors from "$lib/components/Sponsors.svelte";
    import type {LayoutBackground, LayoutConf} from "$lib/models/LayoutConf";
    import {fixedPlayerNames} from "$lib/stores/ConfStore";
    import {currentGame} from "$lib/stores/GameStore";
    import {themestore} from "$lib/stores/ThemeStore";
    import {game_dimensions, game_layout_fields} from "./utils";
    import Frame from "../components/Frame.svelte";

    const width = 1920;
    const height = 1080;
    const gameWidth = 1353;
    const gameHeight = 1015;
    const donationBarHeight = 65;
    const cameraHeight = 250;

    let borderWidth = 0;
    let borderRadius = 0;
    $: borderWidth = $themestore?.borderWidth ?? 0;
    $: borderRadius = $themestore?.borderRadius ?? 0;

    let {
        leftCol,
        bottomBar,
        donationBar,
        camera,
        game,
        leftPlayerNames
    } = game_dimensions(width, height, gameWidth, gameHeight, donationBarHeight, width, undefined, cameraHeight, true);

    let background: LayoutBackground;
    $: background = {
        holes: [
            {
                name: 'camera',
                layout: {
                    x: camera.x - borderRadius,
                    y: camera.y,
                    width: camera.width + borderRadius - borderWidth,
                    height: camera.height,
                },
            },
            {
                name: 'game',
                layout: {
                    x: game.x,
                    y: game.y - borderRadius,
                    height: game.height + borderRadius,
                    width: game.width + borderRadius,
                },
            },
        ]
    }
    let layout: LayoutConf;
    $: layout = {
        name: 'FourThree',
        width,
        height,
        gameWidth,
        gameHeight,
        contents: [],
        background,
    }
</script>

<StreamLayout {layout}>
    <svelte:fragment slot="foreground">
        <AbsDiv name="leftCol" cls="col" {...leftCol}>
            <div id="leftColWrapper" class="col">
                <div style="position: absolute; width: 60%">
                    <Logo logo="fourthree"/>

                </div>
                <div class="sponsor col" style="flex-grow: 1">
                    <Sponsors/>
                </div>
                <div class="counters">
                    <Counters size="small"/>
                </div>
                <div class="col bottom">
                    <div class="float">
                        <div class="col gamedata" style="gap: 20px; margin: 0 10px 0 4px; justify-content: right">
                            <GameData showGameIcon={false}/>
                        </div>
                        <div class="left">
                            <div class="col">
                                <div class="gameicon">
                                    <div>
                                        <GameIcon
                                                img_filename={$currentGame?.img_filename}
                                                img_style="max-height:220px; max-width:220px"
                                        ></GameIcon>
                                    </div>
                                </div>
                                <GameTimer/>
                            </div>
                        </div>
                    </div>
                    <PlayerNameWrapper caster={true}>
                        <PlayerName caster={true}/>
                    </PlayerNameWrapper>
                </div>
            </div>
        </AbsDiv>

		<Frame {...camera} />
        <AbsDiv name="leftCol2" cls="col" {...leftPlayerNames}>
            {#if $fixedPlayerNames}
                <PlayerNameWrapper>
                    <PlayerName/>
                </PlayerNameWrapper>
            {/if}
        </AbsDiv>
        {#if !$fixedPlayerNames}
            <PlayerNamesGrid left={leftCol.width} bottom={donationBarHeight}/>
        {/if}
        <div id="donationbar">
            <DonationBar/>
        </div>
    </svelte:fragment>
</StreamLayout>

<style>
    .counters {
        z-index: 100;
        position: absolute;
        top: 260px;
        left: 10px;

    }
    .float{
        position: relative;
    }
    .left{
       display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .gameicon {
        z-index: 100;
        height: 180px;
        position: relative;

    }

    .gameicon > div {
        position: absolute;
        top: 50%;
        left: 20px;
    }

    .bottom {
        position: absolute;
        bottom: 0px;
        width: 100%;
    }

    .gamedata {
        position: absolute;
        width: 60%;
        bottom: 0px;
        right: 10px;
        align-items: flex-end;
    }

    .sponsor {
        position: absolute;
        right: 0;
        top: 150px;
        height: 300px;
        --header-padding-override: 30px;
        --header-size-override: auto;
        --font-size-override: var(--fourthree-sponsors-font-size, var(--sponsors-font-size));
        overflow: visible;
        width: 60%;
    }

    #leftColWrapper {
        flex-grow: 1;
        background: var(--background);
        border: var(--border);
        border-top: none;
        border-left: none;
        border-bottom-right-radius: var(--border-radius);
    }

    #donationbar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: calc(0px - var(--border-width));
        height: calc(65px + var(--border-width));
    }
</style>