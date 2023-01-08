<script lang="ts">
  import { WaveBgContainer, Title, Button } from '@/components';
  import { page } from '$app/stores';
</script>

<div id="error-page">
  <WaveBgContainer>
    <div class="inner">
      <Title class="text" size="xxl">
        <strong class="state-number">{$page.status}</strong>
        ERROR
      </Title>
      <p class="desc">요청하신 페이지를 찾을 수 없습니다.</p>
      <Button class="prev-btn" on:click={() => history.back()}>뒤로가기</Button>
    </div>
  </WaveBgContainer>
</div>

<style lang="scss" module>
  #error-page {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .inner {
      min-width: 368px;
      position: relative;
      z-index: 1;
      width: max-content;
      display: grid;
      grid-gap: 80px;
      text-align: center;
    }
    .text {
      font-size: 40px;
      line-height: 1;
    }
    .state-number {
      font-size: 56px;
      line-height: inherit;
      color: var(--color-primary);
    }
    .desc {
      font-size: 16px;
      color: var(--color-gray-60);
    }
    .prev-btn {
      padding: 16px 0;
    }
  }
</style>
