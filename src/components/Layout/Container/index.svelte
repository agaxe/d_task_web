<script>
  import { Sidebar, Header } from '@/components';
</script>

<!-- 
  @component
  - 헤더 및 컨텐츠 레이아웃 컴포넌트입니다.
  
  ```tsx
  <Layout>
    <Slot/>
  </Layout>
  ```
 -->
<div id="wrap">
  <Sidebar />
  <main class="container">
    <Header />
    <slot />
  </main>
</div>

<style lang="scss">
  @use './index';

  .container {
    $pd: 32px;
    padding: $pd;
    padding-top: calc(var(--layout-header-h) + #{$pd});
    background-color: #f4f7f9;
  }
</style>
