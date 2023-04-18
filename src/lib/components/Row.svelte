<script lang="ts">
    export let maxHeight = 'auto';
    export let height = 'auto';
</script>

<div class="row" style="height: {height}; maxHeight: {maxHeight};">
    <slot />
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: space-between;
    }
</style>