<script>
    export let data;
</script>

<ul>
  {#each data.layoutNames as name}
    <li><a href="/{name}">{name}</a></li>
  {/each}
</ul>
