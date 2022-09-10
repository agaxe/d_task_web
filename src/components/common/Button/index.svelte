<script lang="ts">
</script>

<button {...$$restProps} class={`button ${$$restProps.class || ''}`} on:click>
  <p><slot /></p>
</button>

<style lang="scss">
  @use './index';
</style>
