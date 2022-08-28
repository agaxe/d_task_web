<script lang="ts">
  import { Image, Icon } from '@/components';

  export let src: string = '';
  export let size: 'md' | 'lg' | '' = '';
</script>

<div class={`profile ${$$restProps.class || ''} size-${size}`}>
  {#if src}
    <Image class="profile-img" {src} alt="profile-img" />
  {:else}
    <Icon name="profile" />
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
