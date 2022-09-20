<script lang="ts">
  import { Icon } from '@/components';

  export let hasOverlay = true;
</script>

<div
  id="modal"
  class={`${$$restProps.class || ''}`}
  class:has-overlay={hasOverlay}
>
  <div class="inner">
    <Icon class="close-icon" name="close" on:click />
    <slot />
  </div>
  <div class="overlay" on:click />
</div>

<style lang="scss" module>
  @use './index';
</style>
