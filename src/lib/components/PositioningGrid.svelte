<script lang="ts">
  export let left = 0;
  export let top = 0;
  export let right = 0;
  export let bottom = 0;
</script>

<div class="container" style="position: absolute; top: {top}px; left: {left}px; bottom: {bottom}px; right: {right}px;">
  <slot />
</div>
