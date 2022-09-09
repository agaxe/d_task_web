<script lang="ts">
  import { Title, Input } from '@/components';
  import AsideMoreItem from './AsideMoreItem.svelte';
  import AsideMore from './AsideMore.svelte';
  import { searchState } from '@/store/search';
  import { noticeState } from '@/store/notice';
  import { asideState } from '@/store/aside';

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

<aside id="aside" class={`${$$restProps.class || ''}`}>
  <Title class="title">CHAT</Title>
  <div class="msg-wrap">
    <div class="msg-box" />
    <div class="msg-input-box">
      <Input iconName="send" iconAlign="RIGHT" class="msg-input" />
    </div>
  </div>
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
</aside>

<style lang="scss" module>
  @use './index';
</style>
