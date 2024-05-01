<script lang="ts">
	import StreamLayout from '$lib/StreamLayout.svelte';
	import AbsDiv from '$lib/components/AbsDiv.svelte';
	import DonationBar from '$lib/components/DonationBar.svelte';
	import Frame from '$lib/components/Frame.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import type { LayoutBackground, LayoutConf, LayoutDimension, LayoutHole } from '$lib/models/LayoutConf';

	import { themestore } from '$lib/stores/ThemeStore';
	import { style_string } from './utils';
	export let width = 1920;
	export let height = 1080;
	export let donationBarHeight = 65;
    $: borderRadius = $themestore?.borderRadius ?? 0;
    $: borderWidth = $themestore?.borderWidth ?? 0;
    
    let holeWidth = width - 2*donationBarHeight;
    let holeHeight = holeWidth / 16 * 9;
    let holeX = donationBarHeight;
    let holeY = height - donationBarHeight - holeHeight;


	let background: LayoutBackground;
    let hole = {
          x: holeX,
          y: holeY,
          width: holeWidth,
          height: holeHeight,
        };
  $: background = {
    holes: [
      {
        name: 'video',
        layout: hole
      }
    ],
    style: '--override-background-color: var(--background-color); --override-background: var(--setuptime-background);'
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

    <div id="donationbar">
			<DonationBar />
    </div>
    <AbsDiv {...hole} style="border: var(--border); border-radius: var(--border-radius); bottom-border: none;"></AbsDiv>
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
