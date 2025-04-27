<script lang="ts">
  const currentCasters = []
  export let side = 'left';
  export let caster = false;
  export let fillHeight = '';
  export let showTitle = true;
  const show = !(caster && currentCasters.length == 0)

</script>

<div class="playernameWrapper {side} {fillHeight}">
  {#if show}
    {#if showTitle}
  <div class="playernameHeader">
    {#if caster}Sohvalla {currentCasters}{:else}Juoksija{/if}
  </div>
  {/if}
  <slot />
  {/if}
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
  .playernameHeader{
    font-family: var(--header-font);
    font-size: var(--player-name-header-font-size,0px);
    line-height: calc(var(--playername-font-size,0px) * 1.3 );
    flex-grow: 0.5;
  }
</style>