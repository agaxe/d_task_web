<script lang="ts">
  import { Modal, Textarea, Icon, Chip, TagInput } from '@/components';
  import { kanbanState } from '@/store/kanban';

  let { kanbanInfo } = $kanbanState;
</script>

<Modal
  on:click={() =>
    kanbanState.update((state) => ({
      ...state,
      isShowKanbanModal: false
    }))}
>
  <div class="kanban-info">
    <div>
      <input
        class="input-title"
        bind:value={kanbanInfo.title}
        placeholder="제목 없음"
      />
      <input bind:value={kanbanInfo.desc} placeholder="내용 입력" />
    </div>
    <span class="line" />
    <div>
      <ul class="kanban-info-list">
        <li>
          <div class="label-wrap">
            <Icon class="icon" name="circle-user" />
            <strong>생성자</strong>
          </div>
          <p>{kanbanInfo.userName}</p>
        </li>
        <li>
          <div class="label-wrap">
            <Icon class="icon" name="filter" />
            <strong>상태</strong>
          </div>
          <div>
            <Chip text="TODO" theme="gray" />
          </div>
        </li>
        <li>
          <div class="label-wrap">
            <Icon class="icon" name="user" />
            <strong>팀</strong>
          </div>
          <div>
            {#if kanbanInfo.team}
              {kanbanInfo.team}
            {:else}
              <p>선택 안함</p>
            {/if}
          </div>
        </li>
        <li>
          <div class="label-wrap">
            <Icon class="icon" name="deadline" />
            <strong>생성 일시</strong>
          </div>
          <p>{kanbanInfo.userName}</p>
        </li>
        <li>
          <div class="label-wrap">
            <Icon class="icon" name="date" />
            <strong>마감일(선택)</strong>
          </div>
          <p>{kanbanInfo.userName}</p>
        </li>
      </ul>
    </div>
    <span class="line" />
    <div class="file-area">
      {#if !kanbanInfo.files.length}
        <div>file</div>
      {:else}
        <div class="empty-file">
          <Icon class="icon" name="upload" />
          <span>파일 업로드</span>
        </div>
      {/if}
    </div>
    <span class="line" />
    <div>
      <Textarea class="detail-textarea" placeholder="상세내용 입력" />
    </div>
  </div>
</Modal>

<style lang="scss">
  @use './index';
</style>
