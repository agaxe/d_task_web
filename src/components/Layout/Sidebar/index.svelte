<script lang="ts">
  import { onMount } from 'svelte';
  import { Logo, Icon } from '@/components';
  import { initMenuList } from './data';
  import { useResize } from '@/utils';
  import { page } from '$app/stores';

  let menuList = initMenuList;
  let activeId: string | number = 0;

  $: pagePath = $page.routeId?.split('/')[0];
  $: pageId = $page.params.id;
  $: pageIdInfo = `${pagePath}.${pageId}`;
  $: activeId = pageIdInfo;
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
        <li class="menu-item" class:active={item.id === 'project'}>
          <div class="wrap" on:click={() => (item.isOpen = !item.isOpen)}>
            <Icon class="icon-feature" name={item.icon} />
            <p class="text">{item.id}</p>
            {#if item.children?.length}
              <div class="icon-chevron" class:active={true}>
                <Icon name="chevron-down" />
              </div>
            {/if}
          </div>
          {#if item.isOpen}
            <ul class="menu-chd-list">
              {#each item.children as it, idx (idx)}
                {@const currentIdInfo = `${item.id}.${it.id}`}
                <li
                  class="item"
                  class:active={pageIdInfo === currentIdInfo &&
                    activeId === currentIdInfo}
                  on:click={() => (activeId = currentIdInfo)}
                >
                  <a href={`/${item.id}/${it.id}`}>
                    {it.name}
                  </a>
                </li>
              {/each}
              {#if item.id === 'project'}
                <li
                  class="item add-item"
                  class:active={activeId === `add-item`}
                  on:click={() => (activeId = `add-item`)}
                >
                  <Icon class="icon" name="add-round" />
                  <p>Add new Project</p>
                </li>
              {/if}
            </ul>
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
