<script lang="ts">
  import { DateInput, localeFromDateFnsLocale } from 'date-picker-svelte';
  import { Icon } from '@/components';
  import { ko } from 'date-fns/locale';
  import { format as dateFormat } from 'date-fns';

  let locale = localeFromDateFnsLocale(ko);

  export let value: Date | null = null;
  export let format = 'yyyy-MM-dd';
  export let hasIcon = true;
  export let placeholder: Date;
</script>

<div
  class={`${$$restProps.class || ''} date-picker ${hasIcon ? 'has-icon' : ''}`}
>
  {#if hasIcon}
    <!-- content here -->
    <Icon class="icon" name="calendar" />
  {/if}

  <DateInput
    bind:value
    {format}
    {locale}
    placeholder={dateFormat(placeholder, format)}
  />
</div>

<style lang="scss">
  @use './index';
</style>
