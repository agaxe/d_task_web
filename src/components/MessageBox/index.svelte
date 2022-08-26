<script lang="ts">
  export let text: string;
  export let isMyMsg: boolean = false;
</script>

<div
  class={`message-box ${$$restProps.class || ''} ${isMyMsg ? 'primary' : ''}`}
>
  {text}
</div>

<style lang="scss">
  @use './index';
</style>
