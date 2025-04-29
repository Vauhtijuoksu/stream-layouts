<script lang="ts">
	import type { Donation } from "$lib/models/Donation";
    import { flip } from 'svelte/animate';
	import Divider from "./Divider.svelte";
    export let donations: Donation[] = [];

    function rainbow(node) {
        return {
            duration: 25000,
            css: t => {
                return `
                    color: hsl(
                        ${Math.trunc(t * 5 * 360)},
                        ${Math.min(100, 1000 - 1000 * t)}%,
                        ${Math.min(35, 500 - 500 * t)}%
                    );`
            }
        };
    }
    function flash(node) {
        return {
            duration: 15000,
            css: t => {
                return `
                    color: rgb(
                        255,
                        ${255 * Math.max(0, 2*t-1)},
                        ${255 * Math.max(0, 2*t-1)}
                    );`
            }
        };
    }
</script>


{#each donations as donation, i (donation.id)}
  <div class="dono" in:flash animate:flip="{{duration: 300}}">
    <div class="donate">{donation.name} {donation.amount} €</div>
        <Divider {i}></Divider>
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
</style>