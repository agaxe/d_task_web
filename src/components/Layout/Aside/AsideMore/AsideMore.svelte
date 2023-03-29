<script lang="ts">
  import { Badge, Icon, Title } from '@/components';
  import type { ColorThemeType } from '@/shared/type';
  import { asideState } from '@/store/aside';

  export let title = '';
  export let badgeTheme: ColorThemeType = 'gray';
  export let badgeCount = 0;
</script>

<div class="aside-more" class:active={$asideState.isActive}>
  <div class="header">
    <div class="header-title-wrap">
      <Title class="header-title" size="lg">{title}</Title>
      <Badge count={badgeCount} theme={badgeTheme} />
    </div>
    <Icon
      name="close"
      class="header-close"
      on:click={() => asideState.update((v) => ({ ...v, isActive: false }))}
    />
  </div>
  <div class="content">
    <ul class="content-list custom-scroll">
      <slot />
    </ul>
  </div>
</div>

<style lang="scss" module>
  //* 추가 UI
  .aside-more {
    $pd: 24px 16px;
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: inherit;
    display: grid;
    grid-template-rows: minmax(50px, auto) minmax(50px, 1fr);
    transition: left 0.3s;
    z-index: 10;
    &.active {
      left: 0;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: $pd;
      border-bottom: 1px solid var(--color-gray-10);
      &-title-wrap {
        display: flex;
        align-items: center;
      }
      &-title {
        margin-right: 12px;
        user-select: none;
      }
      &-close {
        $size: 24px;
        width: $size;
        height: $size;
        cursor: pointer;
      }
    }
    .content {
      padding: $pd;
      background-color: inherit;
      &-list {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        gap: 16px;
        background-color: inherit;
        height: 100%;
        overflow: overlay;
      }
    }
    // 검색 결과
  } // .aside-more
</style>
