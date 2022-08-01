<script lang="ts">
  const title = 'DTASK';
  export let page: string = '';
</script>

<svelte:head>
  <title>{page ? `${page} | ${title}` : title}</title>
</svelte:head>
