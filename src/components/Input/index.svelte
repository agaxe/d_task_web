<script lang="ts">
  // export let id = '';
  // export let name: string = '';
  // export let type: string = 'text';
  export let value: string | number = '';
  // export let placeholder: string = '';
  // export let maxLength: number = 9999;
  // export let readOnly: boolean = false;
  // export let pattern: string | undefined = undefined;

  // function typeAction(node: HTMLInputElement) {
  //   node.type = type;
  // }

  interface $$Props
    extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']> {}
</script>

<input {...$$restProps} class={`input ${$$restProps.class}`} bind:value />

<!-- <input
  class={`input ${$$restProps.class}`}
  {id}
  {name}
  use:typeAction
  bind:value
  {placeholder}
  maxlength={maxLength}
  readonly={readOnly}
  {pattern}
/> -->
<style lang="scss">
  @use './index';
</style>
