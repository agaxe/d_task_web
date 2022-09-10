<script lang="ts">
  import { SvelteComponent, onMount } from 'svelte';
  import { Icon, Profile, Input } from '@/components';
  import { clickOutSide } from '@/utils';
  import { searchState } from '@/store/search';
  import { noticeState } from '@/store/notice';
  import { setQueryString, getQueryString } from '@/utils';
  import { page } from '$app/stores';
  import { asideState } from '@/store/aside';

  let isSearchActive: boolean;
  let searchInputElement: SvelteComponent;
  let searchValue: string = '';

  // 검색을 하는 경우 -> 검색 결과 영역 active
  $: if (searchValue && $searchState.value === searchValue) {
    asideState.update((v) => ({ ...v, isActive: true, activeType: 'SEARCH' }));
  }

  // 검색 input focus
  $: if (isSearchActive) {
    searchInputElement.focus();
  }

  // 쿼리 스트링 value 값 세팅
  onMount(() => {
    const qsSearchValue = getQueryString($page, 'keyword');
    if (qsSearchValue) {
      searchValue = qsSearchValue;
      isSearchActive = true;
      searchState.update((v) => ({ ...v, value: qsSearchValue }));
    }
  });

  function handleClickSearchBtn() {
    if (searchValue && isSearchActive) {
      searchState.update((v) => ({ ...v, value: searchValue }));
      setQueryString($page, { key: 'keyword', value: searchValue });
    }
  }

  function handleKeyDownSearchInput(e: KeyboardEvent) {
    if (e.key === 'Enter') handleClickSearchBtn();
  }

  function handleClickNoticeIcon() {
    asideState.update((v) => ({ ...v, isActive: true, activeType: 'NOTICE' }));
  }
</script>

<header id="header">
  <h3 class="title">BOARD</h3>
  <ul class="right-area">
    <li
      class="search"
      on:click={() => (isSearchActive = true)}
      on:outclick={() => (isSearchActive = false)}
      use:clickOutSide
    >
      <Icon class="icon" name="search" on:click={handleClickSearchBtn} />
      <Input
        class="search-input {!isSearchActive ? 'inactive' : ''}"
        bind:ref={searchInputElement}
        bind:value={searchValue}
        on:keydown={handleKeyDownSearchInput}
      />
    </li>
    <li class="notice" on:click={handleClickNoticeIcon}>
      <Icon class="icon" name="bell" />
      {#if $noticeState.noticeList.length}
        <div class="dot" />
      {/if}
    </li>
    <li>
      <Profile size="md" />
    </li>
  </ul>
</header>

<style lang="scss" module>
  @use './index';
</style>
