<script lang="ts">
	import { themestore } from "$lib/stores/ThemeStore";
    import { defaultTheme } from "$lib/themes";

    export let logo = "";
    $: images = $themestore?.images ?? {};
</script>

<div class="logo">
    {#if logo === "sixteennine"}
        <img src="{images.logo169}" alt="logo" />
    {:else if logo === "fourthree"}
        <img src="{images.logo43}" alt="logo" class="fourthree" />
    {:else if logo === "extrawide"}
        <img src="{images.logoExtraWide}" alt="logo" />
    {:else if logo === "setuptime"}
        <img src="{images.logoSetupTime}" alt="logo" />
    {:else}
        <img src="{images.logo}" alt="logo" />
    {/if}
</div>

<style>
    .logo > img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    .fourthree{
        max-height: 250px;
    }
</style>