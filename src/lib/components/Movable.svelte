<script lang="ts">
	export let x: number;
	export let y: number;
    export let style = '';

    let down = false;
    // Origin
    let oX = 0;
    let oY = 0;
    // Delta
    let dX = 0;
    let dY = 0;
    // New
    let nX = x;
    let nY = y;

    $: left = nX + dX;
    $: top = nY + dY;

    function mouseDown(event: MouseEvent) {
        down = true;
        oX = event.clientX;
        oY = event.clientY;
    }

    function mouseMove(event: MouseEvent) {
        if (down) {
            dX = event.clientX - oX;
            dY = event.clientY - oY;
        }
    }

    function mouseUp(event: MouseEvent) {
        if (down) {
            down = false;
            nX = nX + dX;
            nY = nY + dY;
            dX = 0;
            dY = 0;
        }
    }

</script>

<div on:mousedown={mouseDown} style="left: {left}px; top: {top}px; {style}">
	<slot />
</div>

<svelte:body on:mousemove={mouseMove} on:mouseup={mouseUp} />

<style>
	div {
		position: absolute;
        z-index: 10000;
	}
</style>
