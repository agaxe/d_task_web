<script lang="ts">
  import { Seo, Layout } from '@/components';
</script>

<Seo />
<Layout>
  {#if false}
    <div />
  {:else}
    <div class="empty-project">
      <p class="text">프로젝트를 등록해주세요</p>
    </div>
  {/if}
</Layout>

<style lang="scss">
  .empty-project {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      user-select: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.18;
      color: var(--color-gray-60);
    }
  }
</style>
