<script>
  export let data;
</script>

<h1>Select theme</h1>
<ul>
  {#each data.themeNames as name}
    <li><a href="/{name}" data-sveltekit-reload>{name}</a></li>
  {/each}
</ul>
