<script lang="ts">
  export let id = '';
  export let name = '';
  export let value = '';
  export let placeholder = '';
</script>

<textarea
  class={`textarea ${$$restProps.class || ''}`}
  {id}
  {name}
  bind:value
  {placeholder}
/>

<style lang="scss">
  @use './index';
</style>
