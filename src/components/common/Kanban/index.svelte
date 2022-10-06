<script lang="ts">
  import { Title, Icon } from '@/components';
  import { kanbanState } from '@/store/kanban';

  export let title = '';
  let slots = $$props.$$slots;

  function handelClickAddBtn() {
    console.log('click add btn');
    kanbanState.update((state) => ({
      ...state,
      isShowKanbanModal: true
    }));
  }
</script>

<div class={`${$$restProps.class || ''} kanban`}>
  <Title class="kanban-title" size="lg">{title.toUpperCase()}</Title>
  <button class="add-btn" on:click={handelClickAddBtn}>
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
