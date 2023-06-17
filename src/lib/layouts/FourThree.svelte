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
	import type { LayoutBackground, LayoutConf } from "$lib/models/LayoutConf";
	import { fixedPlayerNames } from "$lib/stores/ConfStore";
	import { currentGame } from "$lib/stores/GameStore";
  import { themestore } from "$lib/stores/ThemeStore";
	import { game_dimensions, game_layout_fields } from "./utils";

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
  } = game_dimensions(width, height, gameWidth, gameHeight, donationBarHeight, width, undefined, cameraHeight);

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
        <Logo logo="fourthree" />
        <div class="row" style="flex-grow: 1;">
          <div class="gameicon">
            <img src="/gameicons/{$currentGame?.img_filename}"  alt="{$currentGame?.img_filename}"/>
          </div>
          <div class="sponsor col" style="flex-grow: 1">
            <Sponsors />
          </div>
        </div>
        <div class="row" style="gap: 20px; margin: 0 10px 0 4px; justify-content: right">
          <GameData showGameIcon={false} />
        </div>
        <div class="row">
          <Counters />
          <GameTimer />
        </div>
      </div>
      {#if $fixedPlayerNames}
      <PlayerNameWrapper>
        <PlayerName />
      </PlayerNameWrapper>
      {/if}
    </AbsDiv>
    {#if !$fixedPlayerNames}
    <PlayerNamesGrid left={leftCol.width} bottom={donationBarHeight} />
    {/if}
    <div id="donationbar">
      <DonationBar />
    </div>
  </svelte:fragment>
</StreamLayout>

<style>
  .gameicon{
    align-self: flex-end;
    z-index: 100;
    margin-left: -60px;
    margin-right: -20px;
  }
  .gameicon > img {
    margin-bottom: -20px;
    max-height: 300px;
    z-index: 100;
  }
  .sponsor{
    overflow: visible;
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