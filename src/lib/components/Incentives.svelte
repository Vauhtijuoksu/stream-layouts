<script lang="ts">
    import { incentivestore } from "$lib/stores/DonationsStore";

    export let n = 8;
</script>

{#each $incentivestore as incentive, i}
{#if i < n}
<div class="title">{incentive.title}</div>
<div class="endtime">{incentive.end_time}</div>
{/if}
{/each}
