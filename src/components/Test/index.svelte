<style lang="scss">@import './index.scss';</style>
<script lang="ts">
  import { TestType } from './type';
  import { getTestInfo } from './index';
  
  let testInfo:TestType = getTestInfo()
</script>

<!-- html -->
<h2 class='title'>test component</h2>;
<div>{testInfo.text}</div>
<div>
  <div>
    <p>test!!~~</p>
  </div>
</div>;
<!-- html -->


