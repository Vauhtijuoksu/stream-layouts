<script lang="ts">
	import type { Donation } from "$lib/models/Donation";
    import { flip } from 'svelte/animate';
    import { themestore } from "$lib/stores/ThemeStore";
    export let donations: Donation[] = [];

    function rainbow(node) {
        return {
            duration: 25000,
            css: t => {
                return `
                    color: hsl(
                        ${Math.trunc(t * 5 * 360)},
                        ${Math.min(100, 1000 - 1000 * t)}%,
                        ${Math.min(25, 500 - 500 * t)}%
                    );`
            }
        };
    }
    $: divider = $themestore.images?.divider ?? '/images/2023/divider.png';
</script>


{#each donations as donation, i (donation.id)}
  <div class="dono" in:rainbow animate:flip="{{duration: 300}}">
    <div class="donate">{donation.name} {donation.amount} €</div>

        {#if i % 3 === 0 }
            <img class="divider" src="/images/2024/divider.png" alt="divider" />
        {/if}
        {#if i % 3 === 1 }
            <img class="divider" src="/images/2024/divider2.png" alt="divider" />
        {/if}
        {#if i % 3 === 2 }
            <img class="divider" src="/images/2024/divider3.png" alt="divider" />
        {/if}
  </div>
{/each}

<style>
  .dono{
    display: flex;
    align-items: center;
  }
  .donate{
    font-size:  var(--donation-bar-info-font-size);
    white-space: nowrap;

  }
  .divider{
    height: 32px;
    padding: 0 20px;
    text-shadow: none;
  }
</style>