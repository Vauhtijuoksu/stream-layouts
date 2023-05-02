<script lang="ts">
  export let messages: string[] = [];
</script>

{#if messages}
  {#each messages as message}
    <p class="msg">{message}</p>
  {/each}
{:else}
  <slot />
{/if}

<style>
  p.msg {
    color: var(--motd-color);
		font-size: var(--motd-font-size, var(--donation-bar-info-font-size));
    margin: 0;
    white-space: nowrap;
  }
</style>