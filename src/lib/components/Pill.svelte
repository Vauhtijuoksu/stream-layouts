<script lang="ts">
</script>

<div class="pill">
  <slot />
</div>

<style>
  .pill {
    margin-top: 0;
    margin-bottom: 0;
    padding: .25em;
    border: var(--pill-border, var(--border));
    border-radius: var(--pill-border-radius, var(--border-radius));
    font-size: var(--pill-font-size, var(--font-size-md));
  }
  .pill:nth-of-type(2n) {
    background-color: var(--pill-background-1);
    color: var(--pill-font-color-1);
  }
  .pill:nth-of-type(2n + 1) {
    background-color: var(--pill-background-2);
    color: var(--pill-font-color-2);
  }
</style>