<script lang="ts">
  export let className: string = 'button';
  export let onClick: () => void = () => {};
  export let isDisabled: boolean = false;
</script>

<button
  class={`button ${className}`}
  on:click={() => onClick()}
  disabled={isDisabled}
>
  <p><slot /></p>
</button>

<style lang="scss">
  @use './index';
</style>
