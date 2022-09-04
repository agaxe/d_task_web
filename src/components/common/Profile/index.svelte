<script lang="ts">
  import { Image, Icon } from '@/components';

  export let src: string = '';
  export let size: 'md' | 'lg' | 'sm' | '' = '';
  export let isOnline: boolean = false;
</script>

<div class={`profile ${$$restProps.class || ''} size-${size}`}>
  <div class="profile__inner">
    {#if src}
      <Image class="profile-img" {src} alt="profile-img" />
    {:else}
      <Icon name="profile" />
    {/if}
  </div>
  {#if isOnline}
    <div class="profile__online" />
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
