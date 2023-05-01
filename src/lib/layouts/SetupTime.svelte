<script lang="ts">
	import StreamLayout from "$lib/StreamLayout.svelte";
	import AbsDiv from "$lib/components/AbsDiv.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import Incentives from "$lib/components/Incentives.svelte";
	import Logo from "$lib/components/Logo.svelte";
	import NowPlaying from "$lib/components/NowPlaying.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";
	import Upcoming from "$lib/components/Upcoming.svelte";
	import type { LayoutBackground, LayoutConf } from "$lib/models/LayoutConf";
	import { themestore } from "$lib/stores/ThemeStore";
	import { camera_hole } from "./utils";

  const width = 1920;
  const height = 1080;
  const cameraX = width / 2;
  const cameraY = 0;
  const cameraHeight = height / 2;
  const cameraWidth = width - cameraX;
  const donationBarHeight = 65;
  const topLeftWidth = cameraX;
  const topLeftHeight = cameraHeight;
  const bottomLeftY = topLeftHeight;
  const bottomLeftWidth = topLeftWidth;
  const bottomLeftHeight = height - topLeftHeight - donationBarHeight;
  const bottomRightX = bottomLeftWidth;
  const bottomRightY = bottomLeftY;
  const bottomRightWidth = cameraWidth;
  const bottomRightHeight = height - cameraHeight - donationBarHeight;

  const topLeft = {x: 0, y: 0, width: topLeftWidth, height: topLeftHeight}
  const bottomLeft = {x: 0, y: bottomLeftY, width: bottomLeftWidth, height: bottomLeftHeight};
  const bottomRight = {x: bottomRightX, y: bottomRightY, width: bottomRightWidth, height: bottomRightHeight};
  const cameraFrame = {x: cameraX, y: cameraY, width: cameraWidth, height: cameraHeight};
  const donationBar = {x: 0, y: height - donationBarHeight, width: width, height: donationBarHeight};

  let background: LayoutBackground = {
    holes: [
      camera_hole({x: cameraX, y: cameraY, width: cameraWidth, height: cameraHeight}, $themestore.borderRadius, 'top right')
    ],
    style: '--override-background-color: var(--background-color); --override-background: var(--setuptime-background);'
  };

  const layout: LayoutConf = {
    name: 'SetupTime',
    width,
    height,
    background,
    contents: []
  }
</script>

<StreamLayout {layout}>
  <svelte:fragment slot="foreground">
    <AbsDiv name="topLeft" cls="col" {...topLeft}>
      <Logo logo="setuptime"/>
      <div class="col wrapper">
        <Upcoming style="list" offset={0} />
      </div>
    </AbsDiv>
    <AbsDiv name="bottomLeft" cls="col" {...bottomLeft}>
      <div class="col wrapper">
        <Incentives />
      </div>
    </AbsDiv>
    <AbsDiv name="bottomRight" cls="col" {...bottomRight}>
      <Sponsors />
    </AbsDiv>
    <AbsDiv
      name="camera"
      {...cameraFrame}
      style="border-bottom: var(--border);border-left: var(--border);border-bottom-left-radius: var(--border-radius);"
      >
      <div class="np">
        <NowPlaying />
      </div>
    </AbsDiv>
    <div id="donationbar">
      <DonationBar displays={['donations', 'motd']} />
    </div>
  </svelte:fragment>
</StreamLayout>

<style>
  .np {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .wrapper {
    max-height: 90%;
    width: 80%;
    align-self: center;
  }

  #donationbar {
		position: absolute;
		left: 0;
		right: 0;
		bottom: calc(0px - var(--border-width));
		height: calc(65px + var(--border-width));
	}
</style>