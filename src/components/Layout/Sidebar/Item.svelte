<script lang="ts">
  import { Icon } from '@/components';
  import { menuItemType } from './data';

  export let item: { name: string };
  export let id: string = '';
  let isActive = false;

  function handleClickItem() {
    isActive = !isActive;
  }
</script>

<li class="item" class:active={isActive} on:click={handleClickItem}>
  {item.name}
  {isActive ? 'true ' : 'false'}
</li>

<style lang="scss" module>
  .item {
    padding: 16px 40px;
    width: calc(100% - 24px * 2);
    color: var(--color-gray-80);
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--color-bg-active);
    }
    &.active {
      color: var(--color-primary);
      background-color: var(--color-bg-active);
    }
  }
</style>
