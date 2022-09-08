<script lang="ts">
  import { Title, Input, Icon, Badge } from '@/components';
  import SearchItem from './SearchItem.svelte';
  import { search } from '@/store/search';
  import { asideState } from '@/store/aside';
</script>

<aside id="aside" class={`${$$restProps.class || ''}`}>
  <Title class="title">CHAT</Title>
  <div class="msg-wrap">
    <div class="msg-box" />
    <div class="msg-input-box">
      <Input iconName="send" iconAlign="RIGHT" class="msg-input" />
    </div>
  </div>
  <div class="aside-more" class:active={$asideState.isActive}>
    <div class="header">
      <div class="header-title-wrap">
        <Title class="header-title" size="lg">검색 결과</Title>
        <Badge count={$search.result.length} />
      </div>
      <Icon
        name="close"
        class="header-close"
        on:click={() => asideState.update((v) => ({ ...v, isActive: false }))}
      />
    </div>
    <div class="content">
      <ul class="content-list custom-scroll">
        {#each $search.result as item, i (i)}
          <SearchItem
            title={item.title}
            content={item.desc}
            isActive={item.isActive}
          />
        {/each}
      </ul>
    </div>
  </div>
</aside>

<style lang="scss" module>
  @use './index';
</style>
