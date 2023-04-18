<script lang="ts">
    export let width = 'auto';
    export let maxWidth = 'auto';
    export let style = '';
</script>

<div class="col" style="width: {width}; max-width: {maxWidth}; {style}">
    <slot />
</div>

<style>
    .col {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow: hidden;
    }
</style>