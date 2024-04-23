<script lang="ts">
  import { metadata } from "$lib/stores/GameStore";
  import { themestore } from "$lib/stores/ThemeStore";
  import Movable from "./Movable.svelte";

  $: heart = $themestore.images?.heart ?? '/images/2023/heart.png';
</script>


{#each $metadata?.heart_rates ?? [] as heart_rate, i}
<Movable x={0 + i * 60} y={0}>
  <div class="hr">
    <img src="{heart}" alt="hr" />
    <div class="hr-num">{heart_rate}</div>
  </div>
</Movable>
{/each}

<style>
  .hr {
    position: relative;
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hr > img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    filter: var(--heartrate-icon-filter, none);
  }

  .hr-num {
    color: var(--heart-rate-font-color, var(--font-color));
    text-shadow: var(--heart-rate-text-shadow);
    z-index: 10;
  }
</style>