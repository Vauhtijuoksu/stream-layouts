<script lang="ts">
	import StreamLayout from "$lib/StreamLayout.svelte";
	import AbsDiv from "$lib/components/AbsDiv.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import GameData from "$lib/components/GameData.svelte";
	import GameTimer from "$lib/components/GameTimer.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";
	import type { LayoutBackground, LayoutConf } from "$lib/models/LayoutConf";
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

    <AbsDiv name="bottomLeft" cls="col" {...bottomLeft}>
      <GameTimer index={0} />
    <div class="row">
      <GameData />
    </div>
  </AbsDiv>
  
  <AbsDiv name="bottomRight" cls="col" {...bottomRight}>
    <Sponsors />
  </AbsDiv>
  
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
</style>