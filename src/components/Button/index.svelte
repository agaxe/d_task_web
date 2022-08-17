<script lang="ts">
  export let onClick: () => void = () => {};
  export let isDisabled: boolean = false;
</script>

<button
  class={`button ${$$restProps.class || ''}`}
  on:click={() => onClick()}
  disabled={isDisabled}
>
  <p><slot /></p>
</button>

<style lang="scss">
  @use './index';
</style>
