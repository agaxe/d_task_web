<script lang="ts">
  import { Icon } from '@/components';
  import type { ColorThemeType } from '@/shared/type';

  export let theme: ColorThemeType = 'purple';
  export let text: string;
  export let iconName: string = '';
</script>

<div class={`chip ${theme} ${$$restProps.class || ''}`}>
  <p>{text}</p>
  {#if iconName}
    <Icon class="icon" name={iconName} />
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
