<script lang="ts">
  export let size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' = 'md';
  const sizeList = ['xxl', 'xl', 'lg', 'md', 'sm'];

  const tagName = `h${sizeList.findIndex((item) => item === size) + 1}`;
</script>

<svelte:element
  this={tagName}
  class={`title ${tagName} ${$$restProps.class || ''}`}
  ><slot />
</svelte:element>

<style lang="scss">
</style>
