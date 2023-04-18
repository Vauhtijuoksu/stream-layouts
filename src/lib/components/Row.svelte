<script lang="ts">
    export let maxHeight = 'auto';
    export let height = 'auto';
    export let style = '';
</script>

<div class="row" style="height: {height}; maxHeight: {maxHeight}; {style}">
    <slot />
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
    }
</style>