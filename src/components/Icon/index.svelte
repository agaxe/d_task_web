<script lang="ts">
  import InlineSVG from 'svelte-inline-svg';

  //* props
  export let name: string = '';

  $: attributes = {
    class: 'icon'
  };
</script>

<div class={`icon-wrap ${$$restProps.class}`}>
  <InlineSVG src={`/icons/icon_${name}.svg`} {...attributes} />
</div>

<style lang="scss">
  @use './index';
</style>
