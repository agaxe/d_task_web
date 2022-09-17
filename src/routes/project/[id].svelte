<script lang="ts">
  import { ProjectView } from '@/views';
  import { Seo, Container } from '@/components';

  //! <Seo/> 의 page props 에 params.id 를 통해 해당 데이터의 이름(프로젝트명)을 적용시켜야 함
</script>

<Seo page="PROJECT" />
<Container>
  <ProjectView />
</Container>
