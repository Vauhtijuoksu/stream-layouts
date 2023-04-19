<script>
    export let data;
</script>

<h1>Select layout</h1>
<ul>
  {#each data.layoutNames as layout}
    <li><a href="/{data.themeName}/{layout}" data-sveltekit-reload>{layout}</a></li>
  {/each}
</ul>
