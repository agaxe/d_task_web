<script lang="ts">
  import { Input, Icon, Lottie, Logo, Button } from '@/components';
  import { loginFormInfoList } from './data';

  let loginInfo: Record<string, string> = {
    email: '',
    password: ''
  };

  function handleClickLoginBtn() {
    console.log('로그인!', loginInfo);
  }
</script>

<div id="login-page">
  <Icon class="bg-icon bg-top" name="login-bg-top" />
  <div class="inner">
    <div class="content-form">
      <Logo class="content-form__logo" />
      <ul class="content-form__list">
        {#each loginFormInfoList as item, i (i)}
          <li class="content-form__item">
            <label class="content-form__label" for={item.key}
              >{item.lable}</label
            >
            <Input
              class="content-form__input"
              id={item.key}
              placeholder={`${item.keyKo} 입력`}
              type={item?.type}
              bind:value={loginInfo[item.key]}
            />
          </li>
        {/each}
      </ul>
      <Button class="content-form__btn" onClick={handleClickLoginBtn}
        >LOGIN</Button
      >
    </div>
    <div class="content-animation">
      <Lottie id="login-bg" path="/animation/main_bg.json" loop />
    </div>
  </div>
  <Icon class="bg-icon bg-bottom" name="login-bg-bottom" />
</div>

<style lang="scss" module>
  @use './index';
</style>
