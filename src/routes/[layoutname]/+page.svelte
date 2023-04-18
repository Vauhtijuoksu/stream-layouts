<script>
    export let data;
</script>

<ul>
  {#each data.themeNames as theme}
    <li><a href="/{data.layoutName}/{theme}">{theme}</a></li>
  {/each}
</ul>
