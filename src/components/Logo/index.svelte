<script lang="ts">
  import { Icon } from '@/components';

  const logoIconName = 'logo';
  export let isLink: boolean = true;
</script>

<div class={`logo ${$$restProps.class || ''}`}>
  {#if isLink}
    <a href="/">
      <Icon name={logoIconName} />
    </a>
  {:else}
    <Icon name={logoIconName} />
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
