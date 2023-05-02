<script lang="ts">
  export let img_filename = '';
</script>

<div class="game icon">
  <img src="/gameicons/{img_filename}"  alt="{img_filename}"/>
</div>

<style>
  .game.icon > img {
    max-height: 200px;
  }
</style>
