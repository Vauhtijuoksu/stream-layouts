<script lang="ts">
	import StreamBackground from '$lib/StreamBackground.svelte';
	import StreamLayout from '$lib/StreamLayout.svelte';
	import AbsDiv from '$lib/components/AbsDiv.svelte';
	import Counters from '$lib/components/Counters.svelte';
	import DonationBar from '$lib/components/DonationBar.svelte';
	import Frame from '$lib/components/Frame.svelte';
	import GameData from '$lib/components/GameData.svelte';
	import GameTimer from '$lib/components/GameTimer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import PlayerName from '$lib/components/PlayerName.svelte';
	import PlayerNameWrapper from '$lib/components/PlayerNameWrapper.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import type { LayoutBackground, LayoutConf, LayoutDimension, LayoutHole } from '$lib/models/LayoutConf';
	import { fixedPlayerNames } from '$lib/stores/ConfStore';
	import { themestore } from '$lib/stores/ThemeStore';
	import PlayerNamesGrid from '$lib/components/PlayerNamesGrid.svelte';
	import { player } from './utils';

	export let width = 1920;
	export let height = 1080;
  export let playerNameHeight = 55;
	export let donationBarHeight = 65;
	export let donationBarWidth = width;
	export let gameWidth = width / 2;
	export let gameHeight = (height - donationBarHeight) / 2;
	export let cameraWidth = undefined;
	export let cameraHeight = undefined;
	export let divisions = 1;

  $: borderRadius = $themestore?.borderRadius ?? 0;
  $: borderWidth = $themestore?.borderWidth ?? 0;

	let background: LayoutBackground;
  $: background = {
    holes: [
      {
        name: 'game1',
        layout: {
          x: 0 - borderRadius,
          y: 0 - borderRadius,
          width: gameWidth + borderRadius - borderWidth / 2,
          height: gameHeight + borderRadius - borderWidth / 2,
        }
      },
      {
        name: 'game2',
        layout: {
          x: gameWidth + borderWidth / 2,
          y: 0 - borderRadius,
          width: gameWidth + borderRadius - borderWidth / 2,
          height: gameHeight + borderRadius - borderWidth / 2,
        }
      },
      {
        name: 'game3',
        layout: {
          x: gameWidth + borderWidth / 2,
          y: gameHeight + borderWidth / 2,
          width: gameWidth + borderRadius - borderWidth / 2,
          height: gameHeight + borderRadius,
        }
      },
      {
        name: 'camera',
        layout: {
          x: gameWidth / 2,
          y: gameHeight + borderWidth / 2,
          width: gameWidth / 2 - borderWidth / 2,
          height: gameHeight / 2 - borderWidth,
        }
      }
    ]
  };

  let bottomBar = {
    x: 0,
    y: height - donationBarHeight,
    width: width,
    height: donationBarHeight
  }


	let layout: LayoutConf;
	$: layout = {
		name: 'SixteenNine',
		width,
		height,
		contents: [],
		background
	};
</script>

<StreamLayout {layout}>
	<svelte:fragment slot="foreground">
    <AbsDiv cls="col" name="sponsors"
      x={0}
      y={gameHeight+borderWidth/2}
      width={gameWidth/2-borderWidth}
      height={gameHeight/2+borderWidth}
      >
      <div id="sponsorWrapper" class="col">
        <Sponsors></Sponsors>
      </div>
    </AbsDiv>
    <AbsDiv
      cls="col"
      name="playerNamethingy"
      x={gameWidth/2-borderWidth}
      y={gameHeight*(3/2)-playerNameHeight/2}
      height={playerNameHeight}
      width={gameWidth/2+borderWidth*1.5}
      style="z-index: 1000; overflow: visible;">
      <PlayerNameWrapper side="middle" fillHeight="fillHeight">
        <PlayerName></PlayerName>
      </PlayerNameWrapper>

    </AbsDiv>
    <AbsDiv cls="row" name="bottomRow"
      x={0}
      y={gameHeight*(3/2)+borderWidth/2}
      width={gameWidth-borderWidth/2}
      height={gameHeight/2+borderWidth}
      >
      <div id="bottomRowWrapper" class="row">
        <GameData></GameData>
        <GameTimer></GameTimer>
      </div>
    </AbsDiv>

    <div id="donationbar">
			<DonationBar />
		</div>
    <!--

      <AbsDiv name="leftCol" cls="col" {...leftCol}>
        <div id="leftColWrapper" class="col">
          <Logo logo="sixteennine" />
          <Sponsors />
          <Counters />
        </div>
        {#if $fixedPlayerNames}
        <PlayerNameWrapper>
					<PlayerName />
        </PlayerNameWrapper>
        {/if}
      </AbsDiv>
      <AbsDiv name="bottomBar" cls="row" {...bottomBar}>
        <div id="bottomBarWrapper" class="row">
          <GameTimer name={'1'} />
          <GameData />
        </div>
      </AbsDiv>
      <div id="donationbar">
        <DonationBar />
      </div>
      <Frame {...camera} />
      
      {#if !$fixedPlayerNames}
			<PlayerNamesGrid left={leftCol.width} bottom={donationBarHeight+bottomBar.height} />
      {/if}
      <slot />
    -->
	</svelte:fragment>
</StreamLayout>

<style>
	#sponsorWrapper {
		flex-grow: 1;
		background: var(--background);
		border-top: none;
		border-left: none;
		border-top-right-radius: var(--border-radius);
		margin-bottom: 0px;
	}
	#bottomRowWrapper {
    flex-grow: 1;
		background: var(--background);
		border-right: none;
		border-top-right-radius: var(--border-radius);
		margin-left: calc(0px - var(--border-width));
		margin-bottom: calc(0px - var(--border-width));
	}
	#donationbar {
		position: absolute;
		left: 0;
		right: 0;
		bottom: calc(0px - var(--border-width));
		height: calc(65px + var(--border-width));
	}
</style>
