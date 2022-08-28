<!-- 여러 페이지에서 공통적으로 적용되는 컴포넌트를 설정할 수 있다. -->
<script>
  import '@/style/index.scss';
  import { Header } from '@/components';
</script>

<div id="wrap">
  <Header />
  <div class="container">
    <slot />
  </div>
  .
</div>

<style lang="scss">
  #wrap {
    display: grid;
    grid-template-columns: var(--layout-header-w) 1fr;
    width: 100%;
    height: 100%;
  }
</style>
