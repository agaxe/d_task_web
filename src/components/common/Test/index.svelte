<script lang="ts">
  import { getTestInfo } from './index';
  import type { TestType } from './type';

  let testInfo: TestType = getTestInfo();
</script>

<!-- html -->
<h2 class="title">test component</h2>
<div>{testInfo.text}</div>
<div>
  <div>
    <p>test!!~~</p>
  </div>
</div>

<!-- html -->
<style lang="scss">
  @import './index.scss';
</style>
