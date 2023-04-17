<script lang="ts">
    import { incentivestore } from "$lib/stores/DonationsStore";
</script>

{#each $incentivestore as incentive}
<div class="title">{incentive.title}</div>
{/each}
