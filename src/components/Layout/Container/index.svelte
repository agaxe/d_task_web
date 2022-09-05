<script>
  import { Sidebar, Header, Aside } from '@/components';
</script>

<!-- 
  @component
  - 헤더 및 컨텐츠 컨테이너 컴포넌트입니다.
  
  ```tsx
  <Container>
    <Slot/>
  </Container>
  ```
 -->
<div id="wrap">
  <Sidebar />
  <main class="container">
    <Header />
    <slot />
  </main>
  <Aside />
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
