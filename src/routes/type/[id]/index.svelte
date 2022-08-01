<script>
  import { page } from '$app/stores';
  import { Seo } from '@/components';

  const id = $page.params.id;
</script>

<Seo page={`TYPE-${id}`} />
<h1>type {id} page!</h1>
<p>dynamic routing test page</p>
