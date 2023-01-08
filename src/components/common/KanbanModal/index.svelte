<script lang="ts">
  import {
    Button,
    DatePicker,
    Icon,
    Modal,
    TagInput,
    Textarea
  } from '@/components';
  import cloneDeep from 'lodash/cloneDeep';
  import type { EventType } from '@/shared/type';
  import { kanbanState } from '@/store/kanban';
  import {
    dateToFormatString,
    getBase64FromFile,
    getFileSizeString
  } from '@/utils';
  import { allStates, allTeams } from './data';

  let { kanbanInfo } = $kanbanState;
  let kanbanInitInfo = cloneDeep(kanbanInfo);
  let isSubmitLoading = false;
  let isSubmitDone = false;

  let isStateActive = false;
  let isTeamActive = false;

  async function handleChangeFile(event: EventType<HTMLInputElement>) {
    const target = event.currentTarget;
    if (target.files?.length) {
      const file = target.files[0];
      const { name, size } = file;

      const fileBase64 = await getBase64FromFile(file);
      kanbanState.update((state) => {
        state.kanbanInfo.files.push({
          name: String(name),
          file: fileBase64,
          size: getFileSizeString(size)
        });
        return state;
      });
    }
  }

  function handleClickRemoveFile(idx: number) {
    kanbanState.update((state) => ({
      ...state,
      kanbanInfo: {
        ...state.kanbanInfo,
        files: state.kanbanInfo.files.filter((it, i) => i !== idx)
      }
    }));
  }

  function handleClickSubmitBtn() {
    const result = $kanbanState.kanbanInfo;
    console.log('result', result);

    isSubmitLoading = true;

    setTimeout(() => {
      isSubmitLoading = false;
      isSubmitDone = true;

      console.log('완료');
    }, 3000);
  }

  function handleCloseModal() {
    console.log('close');
    kanbanState.update((state) => ({
      ...state,
      isShowKanbanModal: false,
      kanbanInfo: kanbanInitInfo
    }));
  }
</script>

<Modal class="kanban-modal" on:click={handleCloseModal}>
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
          <div class="team-input-wrap">
            {#if !kanbanInfo.states.length}
              <p class="empty-tag-input">선택 안함</p>
            {/if}
            <div>
              <TagInput
                allList={allStates}
                bind:selectList={kanbanInfo.states}
                isActive={isStateActive}
              />
            </div>
          </div>
        </li>
        <li class="team-area">
          <div class="label-wrap">
            <Icon class="icon" name="user" />
            <strong>팀</strong>
          </div>
          <div class="team-input-wrap">
            {#if !kanbanInfo.teams.length}
              <p class="empty-tag-input">선택 안함</p>
            {/if}
            <div>
              <TagInput
                allList={allTeams}
                bind:selectList={kanbanInfo.teams}
                isActive={isTeamActive}
              />
            </div>
          </div>
        </li>
        <li>
          <div class="label-wrap">
            <Icon class="icon" name="deadline" />
            <strong>생성 일시</strong>
          </div>
          <p>{dateToFormatString(new Date(), 'yyyy년 MM월 dd일 aa k:mm')}</p>
        </li>
        <li class="deadline-area">
          <div class="label-wrap">
            <Icon class="icon" name="date" />
            <strong>마감일(선택)</strong>
          </div>
          <div>
            <DatePicker
              class="deadline-picker"
              hasIcon={false}
              value={new Date(kanbanInfo?.deadlineAt)}
              placeholder={new Date()}
            />
          </div>
        </li>
      </ul>
    </div>
    <span class="line" />
    <div class="file-area">
      {#if $kanbanState.kanbanInfo.files.length}
        <ul class="upload-file-list">
          {#each $kanbanState.kanbanInfo.files as item, i (`${item.name}-${i}`)}
            <li class="upload-file-item">
              <Icon class="icon" name="document" />
              <p class="file-name">{item.name}</p>
              <span class="file-size">{item.size}</span>
              <Icon
                class="close-icon"
                name="close"
                on:click={() => handleClickRemoveFile(i)}
              />
            </li>
          {/each}
        </ul>
      {/if}
      <div class="empty-file">
        <Icon class="icon" name="upload" />
        <span>파일 업로드</span>
        <input type="file" class="file-input" on:change={handleChangeFile} />
      </div>
    </div>
    <span class="line" />
    <div>
      <Textarea
        class="detail-textarea"
        placeholder="상세내용 입력"
        bind:value={$kanbanState.kanbanInfo.detail}
      />
    </div>
  </div>
  <div class="button-group">
    <Button theme="grayline" on:click={handleCloseModal}>취소</Button>
    <Button
      on:click={handleClickSubmitBtn}
      isLoading={isSubmitLoading}
      isDone={isSubmitDone}>등록</Button
    >
  </div>
</Modal>

<style lang="scss">
  @use './index';
</style>
