<script lang="ts">
    export let maxWidth = 'auto';
    export let width = 'auto';
</script>

<div class="col" style="width: {width}; maxWidth: {maxWidth};">
    <slot />
</div>

<style>
    .col {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: space-between;
    }
</style>