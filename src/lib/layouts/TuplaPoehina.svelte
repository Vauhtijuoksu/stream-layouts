<script lang="ts">
	import StreamLayout from "$lib/StreamLayout.svelte";
	import AbsDiv from "$lib/components/AbsDiv.svelte";
	import BottomBar from "$lib/components/BottomBar.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";
	import type { LayoutBackground, LayoutConf } from "$lib/models/LayoutConf";
	import { themestore } from "$lib/stores/ThemeStore";

  const width = 1920;
  const height = 1080;
  const donationBarHeight = 65;
  const rightWidth = 800;
  const topRightHeight = 540;
  const bottomRightHeight = height - topRightHeight - donationBarHeight;

  let borderWidth = 0;
  let borderRadius = 0;
  $: borderWidth = $themestore?.borderWidth ?? 0;
  $: borderRadius = $themestore?.borderRadius ?? 0;

  let background: LayoutBackground;

  let bottomRight = {x: width - rightWidth, y: topRightHeight, height: bottomRightHeight, width: rightWidth};

  $: background = {
    holes: [
      {
        name: 'topleft',
        layout: {
          x: 0 - borderRadius,
          y: 0 - borderRadius,
          height: height - donationBarHeight + borderRadius,
          width: width - rightWidth + borderRadius - borderWidth / 2,
        }
      }, {
        name: 'topright',
        layout: {
          x: width - rightWidth + borderWidth / 2,
          y: 0  - borderRadius,
          height: topRightHeight + borderRadius,
          width: rightWidth + borderRadius
        }
      }
    ]
  };

  let layout: LayoutConf;
  $: layout = {
    name: 'TuplaPoehina',
    width,
    height,
    background,
    contents: [],
  };
</script>

<StreamLayout {layout}>
  <svelte:fragment slot="foreground">
    <BottomBar height={donationBarHeight}>
      <DonationBar />
    </BottomBar>
    <AbsDiv name="bottomRight" cls="row" {...bottomRight}>
      <div class="bottomright row">
        <div class="viuhti">
          <img src="/gameicons/generic-03.png" alt="viuhtista" />
        </div>
        <div class="col sponsors">
          <Sponsors />
        </div>
      </div>
    </AbsDiv>
  </svelte:fragment>
</StreamLayout>

<style>
    .bottomright {
      flex-grow: 1;
      background: var(--background);
      border: var(--border);
      border-right: none;
      border-bottom-left-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);
      margin-left: calc(0px - (var(--border-width) / 2));
      margin-bottom: calc(0px - var(--border-width));
      justify-content: flex-end;
	}

  .sponsors {
    flex-grow: 1;
  }
</style>