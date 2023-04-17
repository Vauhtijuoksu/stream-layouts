<script lang="ts">
    import type { LayoutField } from './models/LayoutConf';
	import Clock from "./components/Clock.svelte";
    
    export let fields: Array<LayoutField> = [];

    const getComponent = (name: string) => {
        return Clock;
    };
</script>

{#each fields as field}
    <svelte:component this={getComponent(field.component)} {...field} />
{/each}
