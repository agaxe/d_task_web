<script lang="ts">
  export let theme: 'purple' | 'bronze' | 'pink' | 'blue' | 'green' = 'purple';
  export let text: string;
</script>

<div class={`chip ${theme} ${$$restProps.class || ''}`}>{text}</div>

<style lang="scss">
  @use './index';
</style>
