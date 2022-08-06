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
  import { Test, Seo, Button } from '@/components';
  export let todoList: { title: string }[] = [];
</script>

<Seo page="TEST" />
<div class="content">
  <h1 class="content__title">Test Page</h1>
  <Test />
  <p class="title">global title</p>

  <br />
  <br />
  <hr />
  <br />
  <br />

  <Button className="test-button">button</Button>

  <ul>
    {#each todoList as todo}
      <li>
        {todo.title}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .content {
    & :global(.test-button) {
      text-transform: uppercase;
    }
  }
</style>
