<script lang="ts">
    export let logo = "";
</script>

<div class="logo">
    {#if logo === "withpillows"}
        <img src="/logos/logowithpillows.png" alt="logo" />
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