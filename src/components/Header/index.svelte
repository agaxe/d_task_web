<script lang="ts">
  import { Icon, Profile } from '@/components';
</script>

<header id="header">
  <h3 class="title">BOARD</h3>
  <ul class="right-area">
    <li><Icon class="icon" name="search" /></li>
    <li><Icon class="icon" name="bell" /></li>
    <li>
      <Profile size="md" />
    </li>
  </ul>
</header>

<style lang="scss" module>
  @use './index';
</style>
