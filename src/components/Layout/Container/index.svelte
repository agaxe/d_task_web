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
  <div class="container">
    <Header />
    <main>
      <slot />
    </main>
    <Aside />
  </div>
</div>

<style lang="scss">
  @use './index';

  .container {
    padding-top: var(--layout-header-h);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: var(--color-white);
    main {
      $pd: 32px;
      padding: $pd;
      background-color: #f4f7f9;
    }
  }
</style>
