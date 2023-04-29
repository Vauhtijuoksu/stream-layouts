<script lang="ts">
	import type { LayoutBackground } from "$lib/models/LayoutConf";
	import StreamLayout from "$lib/StreamLayout.svelte";
	import DonationBar from "$lib/components/DonationBar.svelte";
	import { themestore } from "$lib/stores/ThemeStore";

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
  <div class="donationBar" slot="foreground">
    <DonationBar />
  </div>
  <!--<img class="pohoverlay" src="/logos/pohinaoverlay.png" alt="logo" /> -->
</StreamLayout>

<style>
  .pohoverlay{
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .donationBar {
    position: absolute;
    bottom: calc(0px - var(--border-width));
    left: 0;
    right: 0;
    height: calc(65px + var(--border-width));
  }
</style>