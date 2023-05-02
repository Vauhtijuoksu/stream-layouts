<script lang="ts">
  import StreamLayout from '$lib/StreamLayout.svelte';
  import NowPlaying from '$lib/components/NowPlaying.svelte';

  let layout = {
      name: 'nowplaying',
      width: 1920,
      height: 100,
      contents: [],
      background: {holes: [{layout: {x: -25, y: -25, width: 1970, height: 150}}]},
  };
</script>

<StreamLayout {layout}>
<div class="row" slot="foreground">
  <NowPlaying />
</div>
</StreamLayout>