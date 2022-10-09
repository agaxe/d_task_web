<script lang="ts">
  import { Chip } from '@/components';
  import { TagInputListType, TagInputItemType } from '@/shared/type';
  import { clickOutSide } from '@/utils';

  export let selectList: TagInputListType = [];
  export let allList: TagInputListType = [];
  export let isActive = false;

  const hasSelectListItem = (item: TagInputItemType) =>
    selectList.find((it) => it.id === item.id);

  function handleClickAllListChip(item: TagInputItemType) {
    if (!hasSelectListItem(item)) {
      selectList = [...selectList, item];
    }
  }

  function handleClickSelectListChip(item: TagInputItemType) {
    if (hasSelectListItem(item)) {
      selectList = selectList.filter((it) => it.id !== item.id);
    }
  }
</script>

<!-- 
  @component
  - 태그를 선택할 수 있는 input 컴포넌트입니다.
 -->
<div
  class={`tag-input ${$$restProps.class || ''} `}
  class:active={isActive}
  on:click={() => (isActive = true)}
  on:outclick={() => (isActive = false)}
  use:clickOutSide
>
  <ul class="select-list">
    {#each selectList as item, i (item.id)}
      <li class="item" on:click|capture={() => handleClickSelectListChip(item)}>
        <Chip
          text={item.value}
          theme={item?.theme || 'gray'}
          iconName="close"
        />
      </li>
    {/each}
    <li />
  </ul>
  {#if isActive}
    <ul class="all-list">
      {#each allList as item, i (item.id)}
        <li class="item" on:click|capture={() => handleClickAllListChip(item)}>
          <Chip text={item.value} theme={item?.theme || 'gray'} />
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  @use './index';
</style>
