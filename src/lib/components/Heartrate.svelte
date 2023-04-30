<script lang="ts">
  import { metadata } from "$lib/stores/GameStore";
	import Movable from "./Movable.svelte";
</script>


{#each $metadata?.heart_rates ?? [] as heart_rate, i}
<Movable x={0 + i * 60} y={0}>
  <div class="hr">
    <img src="/images/heart.png" alt="hr" />
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
    flex-direction: col;
    justify-content: center;
    align-items: center;
  }

  .hr > img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
  }

  .hr-num {
    color: var(--heart-rate-font-color, var(--font-color));
    z-index: 10;
  }
</style>