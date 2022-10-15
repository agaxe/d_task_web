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

  function handleClickDeleteBtn(idx: number) {
    const isDelete = confirm('삭제하시겠습니까?');

    if (isDelete) {
      console.log('delete', idx);

      //* 1. api

      //* 2. 상태값 적용
      kanbanState.update((state) => {
        state.kanbanList = $kanbanState.kanbanList.map((item) => ({
          ...item,
          children: item.children.filter((it) => it.id !== idx)
        }));
        return state;
      });
    }
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
          onClickDelBtn={() => handleClickDeleteBtn(childItem.id)}
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
