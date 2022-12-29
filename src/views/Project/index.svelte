<script lang="ts">
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import { Kanban, KanbanItem, KanbanModal } from '@/components';
  import {
    KanbanStateType,
    kanbanListChildrenType,
    kanbanState
  } from '@/store/kanban';

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

  let columnItems: KanbanStateType['kanbanList'] = $kanbanState.kanbanList;
  const flipDurationMs = 200;
  const outlineStyle = {
    dropTargetStyle: { outline: 'none' }
  };
  type dndEventType = CustomEvent<DndEvent>;
  type kandanIdType = kanbanListChildrenType['id'];

  // 부모 칸반
  function setKanbanData(e: dndEventType) {
    columnItems = e.detail.items as KanbanStateType['kanbanList'];
  }
  function handleDndConsiderColumns(e: dndEventType) {
    setKanbanData(e);
  }
  function handleDndFinalizeColumns(e: dndEventType) {
    setKanbanData(e);

    kanbanState.update((state) => ({
      ...state,
      kanbanList: columnItems
    }));

    fetchKanbanData();
  }

  // 자식 칸반
  function setKanbanItemData(cid: kandanIdType, e: dndEventType) {
    const colIdx = columnItems.findIndex((c) => c.id === cid);
    columnItems[colIdx].children = e.detail.items as kanbanListChildrenType[];
    columnItems = [...columnItems];
  }
  function handleDndConsiderCards(cid: kandanIdType, e: dndEventType) {
    setKanbanItemData(cid, e);
  }
  function handleDndFinalizeCards(cid: kandanIdType, e: dndEventType) {
    setKanbanItemData(cid, e);

    kanbanState.update((state) => ({
      ...state,
      kanbanList: columnItems
    }));

    fetchKanbanData();
  }

  function fetchKanbanData() {
    console.log('fetch kanbanList', $kanbanState.kanbanList);
  }
</script>

<div class="kanban-wrap">
  <div
    class="dnd-kanban-wrap"
    use:dndzone={{
      items: columnItems,
      flipDurationMs,
      type: 'columns',
      ...outlineStyle
    }}
    on:consider={handleDndConsiderColumns}
    on:finalize={handleDndFinalizeColumns}
  >
    {#each columnItems as item, i (item.id)}
      <div animate:flip={{ duration: flipDurationMs }}>
        <Kanban title={item.title}>
          <div
            class="dnd-kanban-list"
            use:dndzone={{
              items: item.children,
              flipDurationMs,
              ...outlineStyle
            }}
            on:consider={(e) => handleDndConsiderCards(item.id, e)}
            on:finalize={(e) => handleDndFinalizeCards(item.id, e)}
          >
            {#each item.children as childItem, idx (childItem.id)}
              <li
                class="dnd-kanban-item"
                animate:flip={{ duration: flipDurationMs }}
              >
                <KanbanItem
                  title={childItem.title}
                  desc={childItem.desc}
                  createdAt={childItem.createdAt}
                  tagList={childItem.tagList}
                  on:click={() => handleClickKanbanItem(childItem.id)}
                  onClickDelBtn={() => handleClickDeleteBtn(childItem.id)}
                />
              </li>
            {/each}
          </div>
        </Kanban>
      </div>
    {/each}
  </div>
  {#if $kanbanState.isShowKanbanModal}
    <KanbanModal />
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
