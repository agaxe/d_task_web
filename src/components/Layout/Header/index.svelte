<script lang="ts">
  import { SvelteComponent } from 'svelte';
  import { Icon, Profile, Input } from '@/components';
  import { clickOutSide } from '@/utils';

  let isSearchActive: boolean;
  let searchInputElement: SvelteComponent;

  $: {
    if (isSearchActive) {
      searchInputElement.focus();
    }
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
      <Icon class="icon" name="search" />
      <Input
        class="search-input {!isSearchActive ? 'inactive' : ''}"
        bind:ref={searchInputElement}
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
