<script lang="ts">
  export let side = 'left';
</script>

<div class="playernameWrapper {side}">
  <slot />
</div>

<style>
  .playernameWrapper {
    padding: var(--playername-padding, var(--padding));
    margin-top: calc(0px - var(--border-width));
    background-color: var(--playername-background);
    border-style: var(--playername-border-style, var(--border-style));
    border-color: var(--playername-border-color, var(--border-color));
    border-width: var(--playername-border-width, var(--border-width));
    border-radius: var(--playername-border-radius, var(--border-radius));
  }
  .playernameWrapper.left {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }
  .playernameWrapper.right {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }
</style>