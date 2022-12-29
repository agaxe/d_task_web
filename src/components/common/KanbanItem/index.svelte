<script lang="ts">
  import { Chip, Icon, Title } from '@/components';
  import { ColorThemeType, TagInputItemType } from '@/shared/type';
  import { isoDateToFormatString } from '@/utils';
  import { kanbanOtherInfo } from './data';

  export let title = '';
  export let desc = '';
  export let createdAt = '';
  export let tagList: (TagInputItemType & { theme: ColorThemeType })[] = [];
  export let onClickDelBtn = () => {};

  let otherInfoCnt: Record<string, number> = {
    file: 1,
    comment: 0
  };
</script>

<div class="kanban-item" on:click|self>
  <div class="title-area">
    <Title class="title" size="sm">{title}</Title>
    <Icon class="icon icon-delete" name="delete" on:click={onClickDelBtn} />
  </div>
  <p class="desc">
    {desc}
  </p>
  <ul class="chip-list">
    {#each tagList as item, i (item.id)}
      <li>
        <Chip text={item.value} theme={item.theme} />
      </li>
    {/each}
  </ul>
  <div class="item-info center">
    <div class="created-at center">
      <Icon class="icon" name="clock" />
      <strong>{isoDateToFormatString(createdAt)}</strong>
    </div>
    <ul class="other-info center">
      {#each kanbanOtherInfo as item, i (item.id)}
        <li class="center">
          <Icon class="icon" name="file" />
          <strong>{otherInfoCnt[item.id]}</strong>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  @use './index';
</style>
