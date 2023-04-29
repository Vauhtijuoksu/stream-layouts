<script lang="ts">
    export let logo = "";
</script>

<div class="logo">
    {#if logo === "sixteennine"}
        <img src="/logos/logo23_169.png" alt="logo" />
    {:else if logo === "fourthree"}
        <img src="/logos/logo23_43.png" alt="logo" />
    {:else if logo === "extrawide"}
        <img src="/logos/logo23_extrawide.png" alt="logo" />
    {:else if logo === "setuptime"}
        <img src="/logos/logo23_setuptime.png" alt="logo" />
    {:else}
        <img src="/logos/logo2023.png" alt="logo" />
    {/if}
</div>

<style>
    .logo > img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
</style>