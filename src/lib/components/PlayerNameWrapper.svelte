<script lang="ts">
  export let side = 'left';
  export let fillHeight = '';
</script>

<div class="playernameWrapper {side} {fillHeight}">
  <slot />
</div>

<style>
  .playernameWrapper {
    padding: var(--playername-padding, var(--padding));
    margin-top: calc(0px - var(--border-width));
    background: var(--playername-background);
    border-style: var(--playername-border-style, var(--border-style));
    border-color: var(--playername-border-color, var(--border-color));
    border-width: var(--playername-border-width, var(--border-width));
    border-radius: var(--playername-border-radius, var(--border-radius));
    color: var(--playername-font-color);
    text-shadow: var(--playername-box-text-shadow);
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
  .playernameWrapper.fillHeight {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>