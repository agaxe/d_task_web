<script lang="ts">
  import { onMount } from 'svelte';
  import type { ToastType } from '@/shared/type';
  import { toastState } from '@/store/toast';

  const INTERVAL = '30px';

  type PositionType = Pick<ToastType['option'], 'position'>;
  let defaultOption: PositionType = {
    position: 'bottom-right'
  };
  export let options: PositionType = defaultOption;

  let toastContainer: null | HTMLDivElement = null;
  function positionSplit(idx = 0) {
    return (
      options.position.split('-')[idx] || defaultOption.position.split('-')[idx]
    );
  }

  let positionX = positionSplit(1);
  let positionY = positionSplit(0);

  onMount(() => {
    if (toastContainer) {
      toastState.update((state) => ({
        ...state,
        toastContainer
      }));
    }
  });
</script>

<div
  id="toast"
  bind:this={toastContainer}
  style={`${positionX} : ${INTERVAL}; ${positionY} : ${INTERVAL}`}
/>

<style lang="scss">
  @import './index';
</style>
