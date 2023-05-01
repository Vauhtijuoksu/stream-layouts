<script lang="ts">
	import StreamLayout from "$lib/StreamLayout.svelte";
	import AbsDiv from "$lib/components/AbsDiv.svelte";
	import Counter from "$lib/components/Counter.svelte";
	import Counters from "$lib/components/Counters.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import GameData from "$lib/components/GameData.svelte";
	import GameTimer from "$lib/components/GameTimer.svelte";
	import GridItem from "$lib/components/GridItem.svelte";
	import PlayerNamesGrid from "$lib/components/PlayerNamesGrid.svelte";
	import PositioningGrid from "$lib/components/PositioningGrid.svelte";
	import RaceTimer from "$lib/components/RaceTimer.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";
	import type { LayoutBackground, LayoutConf } from "$lib/models/LayoutConf";
	import { fixedPlayerNames } from "$lib/stores/ConfStore";
	import { currentPlayers } from "$lib/stores/GameStore";
	import { themestore } from "$lib/stores/ThemeStore";

  const width = 1920;
  const height = 1080;
  const gameWidth = 960;
  const gameHeight = 720;
  const donationBarHeight = 65;
  const bottomBarHeight = height - gameHeight - donationBarHeight;
  const cameraHeight = bottomBarHeight;
  const cameraWidth = 480;
  const bottomSideWidth = (width - cameraWidth) / 2;
  const bottomBarY = gameHeight;
  const cameraX = bottomSideWidth;
  const cameraY = gameHeight;
  const bottomCenterWidth = width - 2*cameraWidth;
  const bottomCenterX = cameraWidth;

  const bottomLeft = {x: 0, y: bottomBarY, width: bottomSideWidth, height: bottomBarHeight, style: 'padding: 10px; background: var(--background); border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);'};
  const bottomRight = {x: bottomSideWidth+cameraWidth, y: bottomBarY, width: bottomSideWidth, height: bottomBarHeight, style: 'padding: 10px; background: var(--background); border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius);'};
  const bottomCenter = {x: bottomCenterX, y: bottomBarY, width: bottomCenterWidth, height: bottomBarHeight, style: 'padding: 10px; background: var(--background); border-radius: var(--border-radius); '}
  const donationBar = {x: 0, y: 1015, width: 1920, height: 65};

  let splitBottom = true;

  $: borderRadius = $themestore?.borderRadius ?? 0;
  $: borderWidth = $themestore?.borderWidth ?? 0;

  let background: LayoutBackground;
  $: background = splitBottom ? {
    holes: [
      {
        name: 'game1',
        layout: {
          x: 0 - borderRadius,
          y: 0 - borderRadius,
          width: gameWidth+borderRadius-borderWidth/2,
          height: gameHeight+borderRadius-borderWidth,
        },
      },
      {
        name: 'game2',
        layout: {
          x: gameWidth+borderWidth/2,
          y: -borderRadius,
          width: gameWidth+borderRadius,
          height: gameHeight+borderRadius-borderWidth,
        }
      },
      {
        name: 'camera',
        layout: {
          x: cameraX + borderWidth,
          y: cameraY,
          width: cameraWidth - 2*borderWidth,
          height: cameraHeight,
        }
      }
    ]
  } : {
    holes: [
      {
        name: 'game1',
        layout: {
          x: 0 - borderRadius,
          y: 0 - borderRadius,
          width: gameWidth+borderRadius-borderWidth/2,
          height: gameHeight+borderRadius-borderWidth,
        },
      },
      {
        name: 'game2',
        layout: {
          x: gameWidth+borderWidth/2,
          y: -borderRadius,
          width: gameWidth+borderRadius,
          height: gameHeight+borderRadius-borderWidth,
        }
      },
      {
        name: 'camera1',
        layout: {
          x: -borderRadius,
          y: cameraY,
          width: cameraWidth + borderRadius - borderWidth,
          height: cameraHeight,
        }
      },

      {
        name: 'camera2',
        layout: {
          x: cameraWidth + bottomCenterWidth + borderWidth,
          y: cameraY,
          width: cameraWidth + borderRadius,
          height: cameraHeight,
        }
      }
    ]
  };

  let layout: LayoutConf;
  $: layout = {
    name: 'FourThreeRace',
    width,
    height,
    gameHeight,
    gameWidth,
    background,
    contents: []
  }
</script>

<StreamLayout {layout}>
  <svelte:fragment slot="foreground">
    <div class="clock1" style="position: absolute; bottom: {bottomBarHeight + donationBarHeight}px; left: 0;">
      <GameTimer name="1" cls="screentimer" showWhen="stopped" showEstimate={false} showIcon={false}/>
    </div>

    <div class="clock2" style="position: absolute; bottom: {bottomBarHeight + donationBarHeight}px; right: 0;">
      <GameTimer name="2" cls="screentimer" showWhen="stopped" showEstimate={false} showIcon={false}/>
    </div>

    {#if splitBottom}
    <AbsDiv name="bottomLeft" cls="col" {...bottomLeft}>
      <div class="row">
        <div class="centerchild">
        <RaceTimer />
        </div>
        <div class="row counters">
          <Counter index={0} i={0} />
          <Counter index={2} i={0} />
        </div>
      </div>
      <div class="row gamedatarow">
        <GameData />
      </div>
  </AbsDiv>
  
  <AbsDiv name="bottomRight" cls="row" {...bottomRight}>
    <div class="row counters">
      <Counter index={1} i={2} />
      <Counter index={3} i={2} />
    </div>
    <div class="col sponsors">
      <Sponsors />
    </div>
  </AbsDiv>

  {:else}

  <AbsDiv name="bottomCenter" cls="row" {...bottomCenter}>
    <div class="col">
      <GameTimer />
      <Counters />
    </div>
    <GameData />
    <div class="col">
      <Sponsors />
    </div>
  </AbsDiv>

  {/if}
  <PlayerNamesGrid top={0} left={0} right={0} bottom={donationBarHeight+bottomBarHeight} />

  <div id="donationbar">
    <DonationBar />
  </div>
</svelte:fragment>
<div slot="controls">
  <div>
    <label>
      <input type="checkbox" bind:checked={splitBottom}>
      Split bottom bar
    </label>
  </div>
</div>
</StreamLayout>

<style>
  #donationbar {
		position: absolute;
		left: 0;
		right: 0;
		bottom: calc(0px - var(--border-width));
		height: calc(65px + var(--border-width));
	}

  .gamedatarow{
    gap: 10px
  }
  .centerchild{
    flex-grow: 1;
    justify-content: center;
  }
  .row {
    justify-content: space-between;
  }
  .row.counters {
    align-items: flex-start;
  }
  .sponsors {
    flex-grow: 1;
    overflow: visible;
  }
</style>