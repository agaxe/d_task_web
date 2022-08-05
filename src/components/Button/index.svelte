<script lang="ts">
  export let className: string = 'button';
</script>

<button class={`button ${className}`}>
  <p><slot /></p>
</button>

<style lang="scss">
  @use './index';
</style>
