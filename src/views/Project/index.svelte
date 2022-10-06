<script lang="ts">
  import { Kanban, KanbanItem, KanbanModal } from '@/components';
  import { kanbanState } from '@/store/kanban';

  function handleClickKanbanItem(id: number) {
    // id 를 통해 정보를 가져와서 store 에 update
    console.log('click kanban item', id);
    kanbanState.update((state) => ({
      ...state,
      isShowKanbanModal: true
    }));
  }
</script>

<div class="kanban-wrap">
  {#each $kanbanState.kanbanList as item, i (item.id)}
    <Kanban title={item.title}>
      {#each item.children as childItem, idx (childItem.id)}
        <KanbanItem
          title={childItem.title}
          desc={childItem.desc}
          createdAt={childItem.createdAt}
          tagList={childItem.tagList}
          on:click={() => handleClickKanbanItem(childItem.id)}
        />
      {/each}
    </Kanban>
  {/each}
  {#if $kanbanState.isShowKanbanModal}
    <KanbanModal />
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
