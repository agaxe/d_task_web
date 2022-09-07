<script lang="ts">
  import { SvelteComponent } from 'svelte';
  import { Icon, Profile, Input } from '@/components';
  import { clickOutSide } from '@/utils';
  import { search } from '@/store/search';
  import { setQueryString } from '@/utils';
  import { page } from '$app/stores';

  let isSearchActive: boolean;
  let searchInputElement: SvelteComponent;
  let searchValue: string = '';

  $: {
    if (isSearchActive) {
      searchInputElement.focus();
    }
  }

  function handleClickSearchBtn() {
    if (searchValue && isSearchActive) {
      search.update((v) => ({ ...v, value: searchValue }));
      setQueryString($page, { key: 'keyword', value: searchValue });
    }
  }

  function handleKeyDownSearchInput(e: KeyboardEvent) {
    if (e.key === 'Enter') handleClickSearchBtn();
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
    <li><Icon class="icon" name="bell" /></li>
    <li>
      <Profile size="md" />
    </li>
  </ul>
</header>

<style lang="scss" module>
  @use './index';
</style>
