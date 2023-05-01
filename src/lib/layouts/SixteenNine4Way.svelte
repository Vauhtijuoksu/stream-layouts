<script lang="ts">
	import Movable from "$lib/components/Movable.svelte";
	import PlayerName from "$lib/components/PlayerName.svelte";
	import PlayerNameWrapper from "$lib/components/PlayerNameWrapper.svelte";
	import SixteenNineBase from "./SixteenNineBase.svelte";
</script>

<SixteenNineBase divisions={4}>
    {#each [0, 1, 2, 3] as i}
    <Movable x={200 + i * 100} y={i * 100}>
        <PlayerNameWrapper>
            <PlayerName index={i} left={false}/>
        </PlayerNameWrapper>
    </Movable>
    {/each}
</SixteenNineBase>