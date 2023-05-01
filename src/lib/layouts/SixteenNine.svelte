<script>

	import PlayerName from "$lib/components/PlayerName.svelte";
	import PlayerNameWrapper from "$lib/components/PlayerNameWrapper.svelte";
	import SixteenNineBase from "./SixteenNineBase.svelte";

</script>
<SixteenNineBase>
    <div id="playername" slot="leftColBottom">
        <PlayerNameWrapper>
            <PlayerName index={0} />
        </PlayerNameWrapper>
    </div>
</SixteenNineBase>
