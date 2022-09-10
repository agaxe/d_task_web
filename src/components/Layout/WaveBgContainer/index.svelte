<script lang="ts">
  import { Icon } from '@/components';
</script>

<!-- 
  @component
  - 물결 아이콘을 활용하여 배경 이미지를 보여주는 컴포넌트입니다.
 -->
<div id="wave-bg-cont">
  <Icon class="bg-icon bg-top" name="login-bg-top" />
  <div class="content">
    <slot />
  </div>
  <Icon class="bg-icon bg-bottom" name="login-bg-bottom" />
</div>

<style lang="scss" module>
  #wave-bg-cont {
    height: 100%;
    width: 100%;
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bg {
      &-icon {
        position: absolute;
      }
      &-top {
        left: 0;
        top: 0;
        width: 50%;
      }
      &-bottom {
        right: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
</style>
