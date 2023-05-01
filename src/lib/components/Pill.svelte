<script lang="ts">
  export let style: "normal" | "fancy" = "normal";
</script>

<div class="pill {style}">
  <slot />
</div>

<style>
  .pill {
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
    padding: .25em;
    border: var(--pill-border, var(--border));
    border-radius: var(--pill-border-radius, var(--border-radius));
    font-size: var(--pill-font-size, var(--font-size-md));
  }
  .pill.normal:nth-of-type(2n) {
    background-color: var(--pill-background-1);
    color: var(--pill-font-color-1);
  }
  .pill.normal:nth-of-type(2n + 1) {
    background-color: var(--pill-background-2);
    color: var(--pill-font-color-2);
  }

  .pill.fancy {
    border-image: var(--pill-fancy-border);
  }
  .pill.fancy:nth-of-type(2n) {
    background: var(--pill-fancy-background-1);
  }
  .pill.fancy:nth-of-type(2n + 1) {
    background: var(--pill-fancy-background-2);
  }
</style>