<script lang="ts">
  import { add } from 'date-fns';
  import {
    Logo,
    Icon,
    Modal,
    Title,
    Input,
    Button,
    Label,
    DatePicker,
    TagInput
  } from '@/components';
  import { initMenuList } from './data';
  import { useResize } from '@/utils';
  import { page } from '$app/stores';
  import { memberState } from '@/store/member';
  import { TagInputListType } from '@/shared/type';

  let menuList = initMenuList;
  let activeId: string | number = 0;
  let projectName = '';
  let startDate: null | Date = null;
  let endDate: null | Date = null;
  let selectMemberList: TagInputListType = [];
  let isActiveModal = false;

  $: pagePath = $page.routeId?.split('/')[0];
  $: pageId = $page.params.id;
  $: pageIdInfo = `${pagePath}.${pageId}`;
  $: activeId = pageIdInfo;

  function handleClickItem(id: string, isAddItem = false) {
    activeId = id;
    isActiveModal = isAddItem;
  }

  function handleClickCloseModal() {
    isActiveModal = false;
    activeId = pageIdInfo;
  }

  function handleClickSubmitBtn() {
    const info = {
      id: Math.floor(Math.random() * 99),
      projectName,
      startDate,
      endDate,
      members: selectMemberList
    };

    console.log('info', info);
  }
</script>

<nav
  id="sidebar"
  class="resize-right"
  use:useResize={['--layout-sidebar-w', 'right']}
>
  <div class="inner">
    <div class="logo-wrap">
      <Logo class="logo" />
    </div>
    <ul class="menu-list custom-scroll">
      {#each menuList as item, i (i)}
        <li class="menu-item" class:active={item.id === 'project'}>
          <div class="wrap" on:click={() => (item.isOpen = !item.isOpen)}>
            <Icon class="icon-feature" name={item.icon} />
            <p class="text">{item.id}</p>
            {#if item.children?.length}
              <div class="icon-chevron" class:active={true}>
                <Icon name="chevron-down" />
              </div>
            {/if}
          </div>
          {#if item.isOpen}
            <ul class="menu-chd-list">
              {#if item.id === 'project'}
                <li
                  class="item add-item"
                  class:active={activeId === `add-item`}
                  on:click|capture={() => handleClickItem(`add-item`, true)}
                >
                  <Icon class="icon" name="add-round" />
                  <p>Add new Project</p>
                  {#if isActiveModal}
                    <Modal
                      class="add-modal"
                      hasOverlay={false}
                      on:click={handleClickCloseModal}
                    >
                      <div class="inner">
                        <Title class="title">새 프로젝트</Title>
                        <Input
                          id="project-name"
                          label="프로젝트명"
                          placeholder="프로젝트 명 입력"
                          bind:value={projectName}
                        />
                        <div class="date-picker">
                          <Label text="일정" />
                          <div class="inner">
                            <DatePicker
                              bind:value={startDate}
                              placeholder={new Date()}
                            />
                            <DatePicker
                              bind:value={endDate}
                              placeholder={add(new Date(), { days: 1 })}
                            />
                          </div>
                        </div>
                        <div>
                          <Label text="멤버" />
                          <TagInput
                            allList={$memberState.memberList.map((it) => ({
                              id: it.id,
                              value: it.name
                            }))}
                            bind:selectList={selectMemberList}
                          />
                        </div>
                        <Button on:click={handleClickSubmitBtn}>등록</Button>
                      </div>
                    </Modal>
                  {/if}
                </li>
              {/if}
              {#each item.children as it, idx (idx)}
                {@const currentIdInfo = `${item.id}.${it.id}`}
                <li
                  class="item"
                  class:active={pageIdInfo === currentIdInfo &&
                    activeId === currentIdInfo}
                  on:click={() => handleClickItem(currentIdInfo)}
                >
                  <a href={`/${item.id}/${it.id}`}>
                    {it.name}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
    <div class="bottom">
      <div class="logout-wrap">
        <Icon class="icon" name="logout" />
        <p class="text">Logout</p>
      </div>
    </div>
  </div>
</nav>

<style lang="scss" module>
  @use './index';
</style>
