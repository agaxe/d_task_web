<script lang="ts">
  import { Test, Seo, Button } from '@/components';
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
</div>

<style lang="scss">
  .content {
    & :global(.test-button) {
      text-transform: uppercase;
    }
  }
</style>
