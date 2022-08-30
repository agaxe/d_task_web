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
  <div class="container">
    <Header />
    <slot />
  </div>
</div>

<style lang="scss">
  @use './index';

  .container {
    padding-top: var(--layout-header-h);
  }
</style>
