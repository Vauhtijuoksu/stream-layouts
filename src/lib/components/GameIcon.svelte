<script lang="ts">
  export let img_filename = '';
  export let img_style='';
</script>

<div class="game icon">
  <img 
    src="/gameicons/2023/{img_filename}"
    alt="{img_filename}"
    style="{img_style}"
    />
</div>

<style>
  .game.icon > img {
    max-height: 200px;
  }
</style>
