<script lang="ts">
  import { Title, Icon, Button } from '@/components';

  export let title = 'test';
  let slots = $$props.$$slots;
</script>

<div class={`${$$restProps.class || ''} kanban`}>
  <Title class="kanban-title" size="lg">{title.toUpperCase()}</Title>
  <button class="add-btn">
    <Icon class="add-icon" name="add" />
  </button>
  {#if slots}
    <ul class="kanban-list">
      <slot />
    </ul>
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
