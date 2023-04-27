<script>

	import PlayerName from "$lib/components/PlayerName.svelte";
	import SixteenNineBase from "./SixteenNineBase.svelte";

</script>
<SixteenNineBase>
    <div id="playername" slot="leftColBottom">
        <PlayerName index={0} />
    </div>
</SixteenNineBase>
