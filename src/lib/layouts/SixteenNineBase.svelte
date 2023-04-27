<script lang="ts">
	import StreamBackground from '$lib/StreamBackground.svelte';
	import StreamLayout from '$lib/StreamLayout.svelte';
	import AbsDiv from '$lib/components/AbsDiv.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import DonationBar from '$lib/components/DonationBar.svelte';
	import Frame from '$lib/components/Frame.svelte';
	import GameData from '$lib/components/GameData.svelte';
	import GameTimer from '$lib/components/GameTimer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import type { LayoutBackground, LayoutConf, LayoutHole } from '$lib/models/LayoutConf';
	import { themestore } from '$lib/stores/ThemeStore';
	import { camera_hole, game_dimensions, game_holes } from './utils';

	export let width = 1920;
	export let height = 1080;

	export let gameWidth = 1520;
	export let gameHeight = 855;
	export let donationBarHeight = 65;
	export let donationBarWidth = width;
	export let cameraWidth = undefined;
	export let cameraHeight = undefined;
	export let divisions = 1;

	const { leftCol, bottomBar, donationBar, camera, game } = game_dimensions(
		width,
		height,
		gameWidth,
		gameHeight,
		donationBarHeight,
		donationBarWidth,
		cameraWidth,
		cameraHeight
	);

	let background: LayoutBackground = {
    holes: [
      camera_hole(camera, $themestore.borderRadius),
      ...game_holes(game, $themestore.borderRadius, $themestore.borderWidth, divisions),
    ]
  };

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
		<AbsDiv name="leftCol" cls="col" {...leftCol}>
			<div id="leftColWrapper" class="col">
				<Logo />
				<Sponsors />
				<Counter />
			</div>
			<slot name="leftColBottom" />
		</AbsDiv>
		<AbsDiv name="bottomBar" cls="row" {...bottomBar}>
			<div id="bottomBarWrapper" class="row">
				<GameTimer index={0} />
				<GameData />
			</div>
		</AbsDiv>
		<div id="donationbar">
			<DonationBar />
		</div>
		<Frame {...camera} />
    <slot />
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
	#bottomBarWrapper {
		width: calc(100% + var(--border-width));
		background: var(--background);
		border: var(--border);
		border-right: none;
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
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
