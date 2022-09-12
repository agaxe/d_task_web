<script lang="ts">
  import { Logo, Icon } from '@/components';
  import { menuList } from './data';
  import { useResize } from '@/utils';
</script>

<nav
  id="sidebar"
  class="resize-right"
  use:useResize={['--layout-sidebar-w', 'right']}
>
  <div class="inner">
    <div class="logo-wrap">
      <Logo class="logo" />
    </div>
    <ul class="menu-list custom-scroll">
      {#each menuList as item, i (i)}
        <li class="menu-item" class:active={i === 0}>
          <Icon class="icon-feature" name={item.icon} />
          <p class="text">{item.id}</p>
          {#if item.children?.length}
            <div class="icon-chevron" class:active={true}>
              <Icon name="chevron-down" />
            </div>
          {/if}
        </li>
      {/each}
    </ul>
    <div class="bottom">
      <div class="logout-wrap">
        <Icon class="icon" name="logout" />
        <p class="text">Logout</p>
      </div>
    </div>
  </div>
</nav>

<style lang="scss" module>
  @use './index';
</style>
