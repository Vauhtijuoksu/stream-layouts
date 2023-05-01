<script lang="ts">
  export let height = 65;
</script>

<div class="bottombar" style="height: calc({height}px + var(--border-width));">
  <slot />
</div>

<style>
  .bottombar {
    position: absolute;
    right: 0;
    left: 0;
    bottom: calc(0px - var(--border-width));
  }
</style>