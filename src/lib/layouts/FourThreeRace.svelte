<script lang="ts">
	import StreamLayout from "$lib/StreamLayout.svelte";
	import AbsDiv from "$lib/components/AbsDiv.svelte";
	import Counter from "$lib/components/Counter.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import GameData from "$lib/components/GameData.svelte";
	import GameTimer from "$lib/components/GameTimer.svelte";
	import GridItem from "$lib/components/GridItem.svelte";
	import PositioningGrid from "$lib/components/PositioningGrid.svelte";
	import RaceTimer from "$lib/components/RaceTimer.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";
	import type { LayoutBackground, LayoutConf } from "$lib/models/LayoutConf";
	import { currentPlayers } from "$lib/stores/GameStore";
	import { themestore } from "$lib/stores/ThemeStore";

  const width = 1920;
  const height = 1080;
  const gameWidth = 960;
  const gameHeight = 720;
  const donationBarHeight = 65;
  const bottomBarHeight = height - gameHeight - donationBarHeight;
  const cameraHeight = bottomBarHeight;
  const cameraWidth = 400;
  const bottomSideWidth = (width - cameraWidth) / 2;
  const bottomBarY = gameHeight;
  const cameraX = bottomSideWidth;
  const cameraY = gameHeight;

  const bottomLeft = {x: 0, y: bottomBarY, width: bottomSideWidth, height: bottomBarHeight, style: 'padding: 10px; background: var(--background); border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);'};
  const bottomRight = {x: bottomSideWidth+cameraWidth, y: bottomBarY, width: bottomSideWidth, height: bottomBarHeight, style: 'padding: 10px; background: var(--background); border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius);'};
  const donationBar = {x: 0, y: 1015, width: 1920, height: 65};

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
    <AbsDiv name="bottomLeft" cls="col" {...bottomLeft}>
      <div class="row">
        <RaceTimer />
        <div class="row counters">
          <Counter index={0} i={0} />
          <Counter index={2} i={0} />
        </div>
      </div>
      <div class="row">
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

  <PositioningGrid top={0} left={0} right={0} bottom={donationBarHeight+bottomBarHeight}>
    {#each $currentPlayers as player, i}
    <GridItem {i}>
      {player.display_name}
    </GridItem>
    {/each}
  </PositioningGrid>
  
  <div id="donationbar">
    <DonationBar />
  </div>
</svelte:fragment>
</StreamLayout>

<style>
  #donationbar {
		position: absolute;
		left: 0;
		right: 0;
		bottom: calc(0px - var(--border-width));
		height: calc(65px + var(--border-width));
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