<script lang="ts">
  export let i = 0;
  const positions = [
    "top left",
    "top midleft",
    "top midright",
    "top right",
    "midtop left",
    "midtop midleft",
    "midtop midright",
    "midtop right",
    "midbottom left",
    "midbottom midleft",
    "midbottom midright",
    "midbottom right",
    "bottom left",
    "bottom midleft",
    "bottom midright",
    "bottom right",
  ];
  let position = positions[i % positions.length];

  function cycle() {
    i = (i+1) % positions.length;
    position = positions[i];
  }
  function cycleBack() {
    i = (i-1) % positions.length;
    position = positions[i];
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item {position}" on:click={cycle} on:contextmenu|preventDefault={cycleBack}>
  <slot />
</div>

<style>

  .item {
    position: absolute;
    font-size: var(--player-name-font-size, var(--font-size-md));
    padding: .5em;
  }

  .left {
    left: 0;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
  .right {
    right: 0;
  }
  .midleft {
    right: 50%;
  }
  .midright {
    left: 50%;
  }
  .midtop {
    bottom: 50%;
  }
  .midbottom {
    top: 50%;
  }
</style>