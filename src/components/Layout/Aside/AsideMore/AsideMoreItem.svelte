<script lang="ts">
  import { Title, Profile } from '@/components';

  export let type = '';
  export let title = '';
  export let content = '';
  export let profileImg = '';
  export let createdAt = '';
  export let isActive = false;
</script>

<li
  class={`aside-more-item type-${type} ${$$restProps.class || ''}`}
  class:active={isActive}
>
  <div class="content">
    <div class="title-wrap">
      {#if profileImg}
        <Profile src={profileImg} size="sm" class="profile" />
      {/if}
      <Title class="title ellipsis" size="md">{title}</Title>
    </div>
    <div class="desc-wrap">
      <p class="desc ellipsis">{content}</p>
      {#if createdAt}
        <!-- 작성한 시간과 현재 시간을 비교해야함 -->
        <!-- 
        - 현재 ~ 1분 미만 : 지금
        - 1분 이상 ~ 1시간 미만 : n분 전
        - 1시간 이상 ~ 24시간 미만 : n시간 전
        - 24시간 이상 : n일 전
       -->
        <p class="date">3분 전</p>
      {/if}
    </div>
  </div>
</li>

<style lang="scss">
  .aside-more-item {
    height: 100%;
    border: 1px solid var(--color-gray-10);
    border-radius: 8px;
    user-select: none;
    position: relative;
    overflow: hidden;
    background-color: inherit;
    box-shadow: 0px 4px 4px rgba(216, 222, 226, 0.2);
    cursor: pointer;
    .content {
      background-color: inherit;
      position: relative;
      padding: 20px;
      border-radius: inherit;
    }

    // 타입별 스타일
    &.type {
      // 검색 결과 아이템
      &-search {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 90%;
          background-color: var(--color-gray-80);
        }
        &.active {
          &:before {
            background-color: var(--color-green);
          }
        }
        .content {
          margin-left: 4px;
        }
        & :global(.title) {
          font-size: 14px;
          margin-bottom: 8px;
        }
        .desc {
          font-size: 12px;
          color: var(--color-gray-40);
        }
      }
      // 알림
      &-notice {
        .title-wrap {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
        }
        & :global(.profile) {
          margin-right: 8px;
        }
        & :global(.title) {
          font-size: 16px;
        }
        .desc-wrap {
          padding-left: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 1;
          font-size: 14px;
        }
      }
    }
  }
</style>
