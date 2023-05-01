<script lang="ts">
	import type { LayoutBackground } from "$lib/models/LayoutConf";
	import StreamLayout from "$lib/StreamLayout.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import { themestore } from "$lib/stores/ThemeStore";
	import Sponsors from "$lib/components/Sponsors.svelte";
	import Heartrate from "$lib/components/Heartrate.svelte";

  let radius = ($themestore.borderRadius ?? 0);
  let background: LayoutBackground =  {
    holes: [
      {
        layout: {
          x: 0 - radius,
          y: 0 - radius,
          height: 1015 + radius,
          width: 1920 + radius * 2,
        }
      }
    ]
  };

  const layout = {
    name: 'Poehina',
    width: 1920,
    height: 1080,
    background,
    contents: [],
  }
</script>

<StreamLayout {layout}>
  <div slot="foreground">
    <div class="donationBar">
      <DonationBar />
    </div>
    <div class="cornercase"></div>
    <div class="pohoverlay">
      <img class="pohoverlay" src="/logos/pohinaoverlay.png" alt="logo" />
      <div class="sponsors">
        <Sponsors />
      </div>
    </div>
  </div>
</StreamLayout>

<style>
  .cornercase{
    position: absolute;
    height: 750px;
    width: 1200px;
    bottom: -390px;
    right: -350px;
    transform: rotate(-30deg);
    background: var(--background);
    border: var(--border);
    z-index: -1;
  }

  .pohoverlay{
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 100;
  }

  .sponsors {
    position: absolute;
    right: 0;
    bottom: 65px;
    height: 330px;
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  .donationBar {
    position: absolute;
    bottom: calc(0px - var(--border-width));
    left: 0;
    right: 0;
    height: calc(65px + var(--border-width));
  }
</style>