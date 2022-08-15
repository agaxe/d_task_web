<!-- 여러 페이지에서 공통적으로 적용되는 컴포넌트를 설정할 수 있다. -->
<script>
  import '@/style/index.scss';
</script>

<header>
  <ul>
    <li>
      <a href="/">home</a>
    </li>
    <li>
      <a href="/test">test</a>
    </li>
    <li>
      <a href="/type/1">type 1</a>
    </li>
  </ul>
</header>
<div class="container">
  <slot />
</div>
<footer>footer</footer>

<style lang="scss">
  .container {
    padding: 16px;
  }
</style>
