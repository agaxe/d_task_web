<script lang="ts">
  export let theme: 'default' | 'outline' | 'grayline' = 'default';
  export let isLoading = false;
  export let isDone = false;
</script>

<button
  {...$$restProps}
  class={`button ${$$restProps.class || ''} ${theme}`}
  class:done={isDone}
  class:loading={isLoading}
  on:click
>
  <p><slot /></p>
  {#if isLoading && !isDone}
    <span class="icon loader" />
  {/if}

  {#if !isLoading && isDone}
    <span class="icon done">
      <svg viewBox="0 0 10 11">
        <path
          d="M1 5.27273L3.8235 8L9 3"
          stroke="white"
          stroke-miterlimit="16"
          stroke-linecap="square"
        />
      </svg>
    </span>
  {/if}
</button>

<style lang="scss">
  @use './index';
</style>
