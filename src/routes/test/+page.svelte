<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const response = await fetch('/test/api');
    if (!response.ok) return { status: response.status };

    const { todoList } = await response.json();

    return {
      status: response.status,
      props: {
        todoList
      }
    };
  };
</script>

<script lang="ts">
  import {
    Button,
    Chip,
    Container,
    Icon,
    Image,
    Input,
    Logo,
    Lottie,
    MessageBox,
    Profile,
    Seo,
    Test,
    Textarea
  } from '@/components';
  import { countInit, countState } from '@/store/count';

  export let todoList: { title: string }[] = [];

  let isLoading = false;
  let isDone = false;

  let isBtnDisabled = false;
  function handleClickButton() {
    isLoading = true;
    isDone = false;
    setTimeout(() => {
      isLoading = false;
      isDone = true;
    }, 3000);
    console.log('click button');
  }

  let inputValue = '';
  $: inputValueLength = inputValue?.length;

  let textareaValue = '';
</script>

<Seo page="TEST" />
<Container>
  <div class="content">
    <h1 class="content__title">Test Page</h1>
    <br />
    <br />
    <br />
    <br />
    <Lottie
      id="animation1"
      class="animation-box"
      path="https://assets9.lottiefiles.com/temporary_files/r5WAZZ.json"
      loop
    />
    <Lottie
      id="animation2"
      class="animation-box"
      path="https://assets6.lottiefiles.com/packages/lf20_OT15QW.json"
      loop
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Profile class="test-profile" size="sm" />
    <Profile class="test-profile" src="/images/temp-img.jpg" />
    <Profile
      class="test-profile"
      src="/images/temp-img.jpg"
      size="md"
      isOnline
    />
    <Profile class="test-profile" src="/images/temp-img.jpg" size="lg" />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Test />
    <p class="title">global title</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="test-msg__list">
      <MessageBox text="받은 메시지" />
      <MessageBox text="보낸 메시지" isMyMsg />
      <MessageBox
        text="보낸 메시지 보낸 메시지 보낸 메시지 보낸 메시지 보낸 메시지 보낸 메시지 보낸 메시지 보낸 메시지 보낸 메시지 "
        isMyMsg
        class="test-msg__item"
      />
    </div>
    <br />
    <br />
    <br />
    <Chip text="chip" theme="pink" />
    <Chip text="chip" theme="green" />
    <Chip text="chip" theme="blue" />
    <Chip text="chip" theme="bronze" />
    <Chip text="chip" theme="purple" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>
      textarea value : {textareaValue}
    </p>
    <Textarea
      class="main-textarea"
      bind:value={textareaValue}
      placeholder="상세 입력"
    />
    <br />

    <Image src="/images/temp-img.jpg" />

    <br />
    <Logo class="main-logo" />
    <br />
    <br />
    <br />
    <Icon name="logo" class="icon logo-icon" />
    <Icon name="folder" class="icon" />
    <Icon name="twitter" class="icon logo-twitter" />
    <hr />
    <div>
      <h2>count : {$countState}</h2>
      <button on:click={() => countState.update((n) => (n > 0 ? n - 1 : n))}
        >-</button
      >
      <button on:click={() => countState.update((n) => n + 1)}>+</button>
      <button on:click={() => countState.set(countInit)}>reset</button>
    </div>
    <br />
    <br />
    <form action="">
      <p>
        <Input type="number" value={inputValueLength} />
      </p>

      <p>
        <Input bind:value={inputValue} placeholder="내용 입력" />
      </p>

      <p>
        <Input type="email" bind:value={inputValue} pattern=".+@gmail.com" />
      </p>
      <button type="submit">submit</button>
    </form>
    <br />
    <br />
    <Button
      class="test-button"
      {isLoading}
      {isDone}
      on:click={handleClickButton}
      disabled={isBtnDisabled}>button</Button
    >
    <Button
      class="test-button"
      theme="grayline"
      on:click={handleClickButton}
      disabled={isBtnDisabled}>button</Button
    >
    <br />
    <Button
      class="test-button"
      on:click={() => (isBtnDisabled = !isBtnDisabled)}
      >Toggle Button disabled</Button
    >
    <ul>
      {#each todoList as todo}
        <li>
          {todo.title}
        </li>
      {/each}
    </ul>
  </div>
</Container>

<style lang="scss" module>
  .content {
    border: 1px solid #f0f;
    .test-button {
      //border: 3px solid #f00;
    }
    .icon {
      width: 50px;
    }
    .logo-twitter {
      width: 30px;
      fill: #f00;
    }
    .main-logo {
      width: 300px;
    }
    .main-textarea {
      height: 300px;
      width: 300px;
    }
    .test {
      &-msg {
        &__list {
          width: 250px;
        }
        &__item {
          width: 100%;
        }
      }
      &-profile {
        width: 200px;
        height: 200px;
      }
    }

    .animation-box {
      width: 300px;
    }
  }
</style>
