<script lang="ts">
  import { ColorThemeType } from '@/shared/type';
  import { Icon } from '@/components';

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
