<!-- 여러 페이지에서 공통적으로 적용되는 컴포넌트를 설정할 수 있다. -->
<script>
  import '@/style/index.scss';
  import { beforeUpdate } from 'svelte';
  import Toast from '@/components/common/Toast/index.svelte';

  // localStorage 에 size 데이터가 존재하는 경우 적용
  beforeUpdate(() => {
    const sizeStorageData = JSON.parse(localStorage.getItem('size')) || {};
    for (const size in sizeStorageData) {
      document.documentElement.style.setProperty(
        size,
        `${sizeStorageData[size]}px`
      );
    }
  });
</script>

<!-- //! 라우팅 테스트 영역 -->
<ul class="temp-menu">
  <li><a href="/">home</a></li>
  <li><a href="/test">test</a></li>
</ul>
<slot />
<Toast />

<style>
  .temp-menu {
    position: fixed;
    background-color: #f00;
    z-index: 100;
    right: 0;
    bottom: 0;
  }
</style>
