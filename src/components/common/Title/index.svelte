<script lang="ts">
  export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
  const sizeList = ['lg', 'md', 'sm', 'xs'];

  const tagName = `h${sizeList.findIndex((item) => item === size) + 1}`;
</script>

<svelte:element
  this={tagName}
  class={`title ${tagName} ${$$restProps.class || ''}`}
  ><slot />
</svelte:element>

<style lang="scss">
</style>
