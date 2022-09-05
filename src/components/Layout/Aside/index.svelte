<script lang="ts">
  import { Title, Input } from '@/components';

  let msgText = '';
</script>

<aside id="aside" class={`${$$restProps.class || ''}`}>
  <Title class="title">CHAT</Title>
  <div class="msg-wrap">
    <div class="msg-box" />
    <div class="msg-input-box">
      <Input
        iconName="send"
        iconAlign="RIGHT"
        class="msg-input"
        bind:value={msgText}
      />
    </div>
  </div>
</aside>

<style lang="scss" module>
  @use './index';
</style>
