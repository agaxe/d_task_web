<script lang="ts">
  import type { ColorThemeType } from '@/shared/type';

  export let count: number;
  export let theme: ColorThemeType = 'gray';
</script>

<div class={`badge ${theme} ${$$restProps.class || ''}`}>{count}</div>

<style lang="scss">
  @use './index';
</style>
