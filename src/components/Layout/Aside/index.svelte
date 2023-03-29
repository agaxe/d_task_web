<script lang="ts">
  import { asideState } from '@/store/aside';
  import { noticeState } from '@/store/notice';
  import { searchState } from '@/store/search';
  import { useResize } from '@/utils';
  import AsideMore from './AsideMore/AsideMore.svelte';
  import AsideMoreItem from './AsideMore/AsideMoreItem.svelte';
  import Message from './Message/Message.svelte';

  let asideMoreInfo: Record<string, any> = {
    search: {
      title: '검색결과',
      badgeTheme: 'gray',
      badgeCount: $searchState.result.length
    },
    notice: {
      title: '알림',
      badgeTheme: 'red',
      badgeCount: $noticeState.noticeList.length
    }
  };

  $: currentAsideMoreType = String($asideState.activeType).toLowerCase();
  $: currentAsideMoreInfo = asideMoreInfo[currentAsideMoreType];
</script>

<aside
  id="aside"
  class={`${$$restProps.class || ''} resize-left`}
  use:useResize={['--layout-aside-w', 'left']}
>
  <div class="aside-wrap">
    <Message />
    <AsideMore
      title={currentAsideMoreInfo.title}
      badgeCount={currentAsideMoreInfo.badgeCount || 0}
      badgeTheme={currentAsideMoreInfo.badgeTheme}
    >
      {#if $asideState.activeType === 'SEARCH'}
        {#each $searchState.result as item, i (i)}
          <AsideMoreItem
            type={currentAsideMoreType}
            title={item.title}
            content={item.desc}
            isActive={item.isActive}
          />
        {/each}
      {:else}
        {#each $noticeState.noticeList as item, i (i)}
          <AsideMoreItem
            type={currentAsideMoreType}
            title={item.user.name}
            content={item.desc}
            profileImg={item.user.profileImg}
            createdAt={item.createdAt}
          />
        {/each}
      {/if}
    </AsideMore>
  </div>
</aside>

<style lang="scss" module>
  @use './index';
</style>
