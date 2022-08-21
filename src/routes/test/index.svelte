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
    Test,
    Seo,
    Button,
    Input,
    Icon,
    Logo,
    Textarea,
    Image
  } from '@/components';
  import { count, countInit } from '@/store/count';
  export let todoList: { title: string }[] = [];

  let isBtnDisabled = false;
  function handleClickButton() {
    console.log('click button');
  }

  let inputValue = '';
  $: inputValueLength = inputValue?.length;

  let textareaValue = '';
</script>

<Seo page="TEST" />
<div class="content">
  <h1 class="content__title">Test Page</h1>
  <Test />
  <p class="title">global title</p>
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
    <h2>count : {$count}</h2>
    <button on:click={() => count.update((n) => (n > 0 ? n - 1 : n))}>-</button>
    <button on:click={() => count.update((n) => n + 1)}>+</button>
    <button on:click={() => count.set(countInit)}>reset</button>
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
    onClick={handleClickButton}
    isDisabled={isBtnDisabled}>button</Button
  >
  <br />
  <Button class="test-button" onClick={() => (isBtnDisabled = !isBtnDisabled)}
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

<style lang="scss" module>
  .content {
    border: 1px solid #f0f;
    .test-button {
      border: 3px solid #f00;
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
  }
</style>
