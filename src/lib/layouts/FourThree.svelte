<script lang="ts">
	import StreamLayout from "$lib/StreamLayout.svelte";
	import AbsDiv from "$lib/components/AbsDiv.svelte";
	import Counter from "$lib/components/Counter.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import GameData from "$lib/components/GameData.svelte";
	import GameTimer from "$lib/components/GameTimer.svelte";
	import Logo from "$lib/components/Logo.svelte";
	import PlayerName from "$lib/components/PlayerName.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";
	import type { LayoutBackground } from "$lib/models/LayoutConf";
  import { themestore } from "$lib/stores/ThemeStore";
	import { game_dimensions, game_layout_fields } from "./utils";

  const width = 1920;
  const height = 1080;
  const gameWidth = 1353;
  const gameHeight = 1015;
  const donationBarHeight = 65;
  const cameraHeight = 250;

  let {
    leftCol,
    bottomBar,
    donationBar,
    camera,
    game,
  } = game_dimensions(width, height, gameWidth, gameHeight, donationBarHeight, width, undefined, cameraHeight);

  let background: LayoutBackground = {
    holes: [
      {name: 'camera', layout: camera},
      {name: 'game', layout: game},
    ]
  }
  const layout = {
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
        <Sponsors />
        <div class="row">
          <GameData />
        </div>
        <div class="row">
          <Counter />
          <GameTimer />
        </div>
      </div>
      <PlayerName />
    </AbsDiv>
    <AbsDiv {...donationBar}>
      <DonationBar />
    </AbsDiv>
  </svelte:fragment>
</StreamLayout>

<style>
  #leftColWrapper {
		flex-grow: 1;
		background: var(--background);
		border: var(--border);
		border-top: none;
		border-left: none;
		border-bottom-right-radius: var(--border-radius);
		margin-bottom: calc(0px - var(--border-width));
	}
</style>