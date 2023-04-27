<script lang="ts">
    export let images: string[];
    export let image = 0;
    export let n_colors = 6;
    export let color = 0;
    export let style = '';

    $: imageSrc = images[image];

    function rotateImage() {
        image = (image + 1) % images.length;
    }
    function rotateColor() {
        color = (color + 1) % n_colors;
        return false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img on:click={rotateImage} on:contextmenu|preventDefault={rotateColor} src="{imageSrc}" alt="{imageSrc}" style="{style}; filter: hue-rotate({color/n_colors}turn);" />
