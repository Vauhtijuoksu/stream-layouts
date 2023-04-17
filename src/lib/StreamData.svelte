<script>
	import Clock from "./components/Clock.svelte";
    export let fields = [];

    const getComponent = (name) => {
        return Clock;
    }
</script>

{#each fields as field}
    <svelte:component this={getComponent(field.component)} {...field.component} />
{/each}