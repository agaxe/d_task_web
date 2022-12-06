<script lang="ts">
  import { dndzone } from 'svelte-dnd-action';

  export let items: any[] = [];
  export let setItems: (newItems: any[]) => void;
  export let finalize: (result: any[]) => void;

  function handleDndConsider(e: any) {
    setItems(e.detail.items);
  }
  function handleDndFinalize(e: any) {
    setItems(e.detail.items);
    finalize(items);
  }
</script>

<div
  class={$$restProps.class || 'dnd-wrap'}
  use:dndzone={{
    items,
    flipDurationMs: 300,
    dropTargetStyle: { outline: 'none' }
  }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
>
  <slot />
</div>

<style lang="scss">
</style>
