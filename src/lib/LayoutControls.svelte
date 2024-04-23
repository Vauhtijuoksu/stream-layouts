<script lang="ts">
	import Heartrate from "./components/Heartrate.svelte";
	import type { LayoutTheme } from "./models/LayoutConf";
	import { fixedPlayerNames, hideGameData } from './stores/ConfStore';
	import { themestore } from "./stores/ThemeStore";
  
	export let theme: LayoutTheme = $themestore;
  
</script>
<div class="col">
  <div style="height: 65px; width: 300px;">
    <Heartrate />
  </div>
  <div>
    Current theme: {theme.name}
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={$fixedPlayerNames}>
      Fixed player names
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={$hideGameData}>
      Hide game data
    </label>
  </div>
</div>

<div class="col">
  <h1>Extra controls</h1>
  <div>
    <slot />
  </div>
</div>