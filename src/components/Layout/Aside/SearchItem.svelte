<script lang="ts">
  import { Title } from '@/components';

  export let isActive = false;
  export let title = '';
  export let content = '';
</script>

<li class={`search-item ${$$restProps.class || ''}`} class:active={isActive}>
  <div class="content ">
    <Title class="title ellipsis" size="sm">{title}</Title>
    <p class="des ellipsis">{content}</p>
  </div>
</li>

<style lang="scss">
  .search-item {
    height: 100%;
    border: 1px solid var(--color-gray-10);
    border-radius: 8px;
    user-select: none;
    position: relative;
    overflow: hidden;
    background-color: inherit;
    box-shadow: 0px 4px 4px rgba(216, 222, 226, 0.2);
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 90%;
      background: var(--color-gray-80);
    }
    &.active {
      &:before {
        background-color: var(--color-green);
      }
    }
    .content {
      background-color: inherit;
      margin-left: 4px;
      position: relative;
      padding: 20px 24px;
      border-radius: inherit;
    }
    & :global(.title) {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .des {
      font-size: 12px;
      color: var(--color-gray-40);
    }
  }
</style>
