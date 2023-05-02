<script lang="ts">
	import { onMount } from "svelte";

  export let messages: string[] = [];
  export let delay = 5000;

  let i = 0;
  $: message = messages[i % messages?.length ?? 0] ?? '';

  onMount(() => {
    let interval = setInterval(() => {
      i += 1
    }, delay);
    return () => clearInterval(interval);
  });
</script>

{#key message}
  <p class="msg">{message}</p>
{/key}

<style>
  p.msg {
    color: var(--motd-color);
		font-size: var(--motd-font-size, var(--donation-bar-info-font-size));
    margin: 0;
    white-space: nowrap;
  }
</style>