<script lang="ts">
    import { currentGame } from "$lib/stores/GameStore";
</script>

<div class="game">
    {$currentGame?.game}
</div>
<div class="device">
    {$currentGame?.device}
</div>
<div class="published">
    {$currentGame?.published}
</div>
