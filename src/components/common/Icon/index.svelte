<script lang="ts">
  import InlineSVG from 'svelte-inline-svg';

  //* props
  export let name: string = '';

  $: attributes = {
    class: 'icon',
    width: '100%',
    height: '100%'
  };
</script>

<div class={`icon-wrap ${$$restProps.class}`} on:click>
  <InlineSVG src={`/icons/icon_${name}.svg`} {...attributes} />
</div>

<style lang="scss">
  @use './index';
</style>
