<script lang="ts">
  import { Title, Chip, Icon } from '@/components';
  import { kanbanOtherInfo } from './data';
  import { isoDateToFormatString } from '@/utils';
  import { TagInputItemType, ColorThemeType } from '@/shared/type';

  export let title = '';
  export let desc = '';
  export let createdAt = '';
  export let chipList: (TagInputItemType & { theme: ColorThemeType })[] = [];

  let otherInfoCnt: Record<string, number> = {
    file: 1,
    comment: 0
  };
</script>

<li class="kanban-item">
  <div class="title-area">
    <Title class="title" size="sm">{title}</Title>
    <Icon class="icon icon-delete" name="delete" />
  </div>
  <p class="desc">
    {desc}
  </p>
  <ul class="chip-list">
    {#each chipList as item, i (item.id)}
      <li>
        <Chip text={item.value} theme={item.theme} />
      </li>
    {/each}
  </ul>
  <div class="item-info cetner">
    <div class="created-at cetner">
      <Icon class="icon" name="clock" />
      <strong>{isoDateToFormatString(createdAt)}</strong>
    </div>
    <ul class="other-info cetner">
      {#each kanbanOtherInfo as item, i (item.id)}
        <li class="cetner">
          <Icon class="icon" name="file" />
          <strong>{otherInfoCnt[item.id]}</strong>
        </li>
      {/each}
    </ul>
  </div>
</li>

<style lang="scss">
  @use './index';
</style>
