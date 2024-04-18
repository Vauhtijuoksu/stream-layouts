<script lang="ts">
  export let img_filename = '';
</script>

<div class="game icon">
  <img src="/gameicons/vj2024/{img_filename}"  alt="{img_filename}"/>
</div>

<style>
  .game.icon > img {
    max-height: 200px;
    z-index: 20;
    position: relative;
    filter: drop-shadow(1px 0px 0 #382218)
        drop-shadow(0px -1px 0 #382218)
        drop-shadow(-1px 0px 0 #382218)
        drop-shadow(0px 1px 0 #382218);
  }
</style>
