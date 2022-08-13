<script lang="ts">
  export let id = '';
  export let name = '';
  export let type = 'text';
  export let value = '';
  export let maxLength = 0;
  export let placeholder = '';
  export let readOnly = false;
  export let onChange = (e: any) => {};
</script>

<input
  class="input"
  {id}
  {name}
  {type}
  {value}
  {placeholder}
  maxlength={maxLength}
  readonly={readOnly}
  on:change={onChange}
/>

<style lang="scss">
  @use './index';
</style>
