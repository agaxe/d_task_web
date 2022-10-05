<script>
  import { Kanban, KanbanItem } from '@/components';
</script>

<div class="kanban-wrap">
  <Kanban>
    <KanbanItem
      title="타이틀"
      desc="설명글 입니다."
      createdAt={new Date().toISOString()}
      chipList={[
        {
          id: 1,
          value: '테스트1',
          theme: 'blue'
        },
        {
          id: 2,
          value: '테스트2',
          theme: 'green'
        },
        {
          id: 3,
          value: '테스트3',
          theme: 'bronze'
        }
      ]}
    />
  </Kanban>
  <Kanban />
  <Kanban />
</div>

<style lang="scss">
  @use './index';
</style>
