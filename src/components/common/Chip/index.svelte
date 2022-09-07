<script lang="ts">
  import { ColorThemeType } from '@/shared/type';
  export let theme: ColorThemeType = 'purple';
  export let text: string;
</script>

<div class={`chip ${theme} ${$$restProps.class || ''}`}>{text}</div>

<style lang="scss">
  @use './index';
</style>
