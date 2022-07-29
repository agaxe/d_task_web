<!-- <script lang="ts">
    import App from '../App.svelte'
</script>

<App>
  <div class="content">
  <h1 class="content__title">Test Page</h1>
  <p class="title">title</p>
</div>
</App> -->

 <div class="content">
  <h1 class="content__title">Test Page</h1>
  <p class="title">title----</p>
 </div>

 
<style lang="scss">
  $color-red: #f00;
  $color-orange : #00f;

  //* test style
  .content{
    border:1px solid $color-red;
    &__title{
      color:$color-orange;
    }
  }

  .title{
    color:#00f
  }
</style>