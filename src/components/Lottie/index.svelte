<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';

  export let id: string;
  export let renderer: 'svg' | 'canvas' | 'html' = 'svg';
  export let loop: boolean = false;
  export let autoplay: boolean = true;
  export let path: string;

  let lottieElement: HTMLDivElement;

  onMount(() => {
    lottie.loadAnimation({
      container: lottieElement,
      renderer,
      loop,
      autoplay,
      path
    });
  });
</script>

<div {id} class={`${$$restProps.class || ''}`} bind:this={lottieElement} />
