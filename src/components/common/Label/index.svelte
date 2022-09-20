<script lang="ts">
  export let id: string = '';
  export let text: string;
</script>

<label class={`${$$restProps.class || ''}`} for={id}>{text}</label>

<style lang="scss">
  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    color: var(--color-gray-90);
  }
</style>
