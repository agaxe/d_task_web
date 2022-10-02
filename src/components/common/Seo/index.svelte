<script lang="ts">
  const name = 'DTASK';

  export let page: string = '';
  export let description: string =
    '디자이너와 개발자 또는 팀을 위한 협업 프로그램 ‘Dtask’';

  let title = page ? `${page} | ${name}` : name;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:site_name" content={name} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/images/meta-img.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ko_KR" />
</svelte:head>
