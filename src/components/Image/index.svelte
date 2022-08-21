<script lang="ts">
  import { onMount } from 'svelte';

  export let src = '';
  export let alt = '';

  let loaded = false;
  let imgSrc = '';

  onMount(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      loaded = true;
      imgSrc = img.src;
    };
  });
</script>

<img class={`img ${$$restProps.class || ''}`} src={imgSrc} {alt} />

<style lang="scss">
  @use './index';
</style>
