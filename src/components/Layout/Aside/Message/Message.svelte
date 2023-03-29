<script>
  import { Input, MessageBox, Title, Profile } from '@/components';
  import { dateToFormatString } from '@/utils';

  let exampleDate = dateToFormatString(new Date(), 'yyyy년 MM월 dd일');
</script>

<div class="chat">
  <Title class="title">CHAT</Title>
  <div class="chat-wrap">
    <div class="chat-box">
      <div class="chat-inner">
        <div class="chat-date">
          <p class="chat-date__text">{exampleDate}</p>
        </div>
        <ul class="chat-list">
          {#each [...Array(4)] as cat}
            <!-- 동적 항목 -->
            <li class="chat-item">
              <div class="chat-profile">
                <Profile class="chat-profile__icon" isOnline size="md" />
                <p class="chat-profile__name">홍길동</p>
              </div>
              <div class="msg">
                <ul class="msg-list">
                  <li class="msg-item">
                    <MessageBox class="msg-text" text="안녕하세요! 😀" />
                    <p class="time">오후 8:54</p>
                  </li>
                  <li class="msg-item">
                    <MessageBox
                      class="msg-text"
                      text="천하를 설레는 용기가 황금시대의 그들은 그들의 같으며, 뿐이다. 어디 아니더면, 내는 것이다."
                    />
                    <p class="time">오후 8:54</p>
                  </li>
                </ul>
              </div>
            </li>
            <!-- /./ 동적 항목 -->

            <!-- 동적 항목 -->
            <li class="chat-item">
              <div class="msg">
                <ul class="msg-list" class:isMyMsg={true}>
                  <li class="msg-item">
                    <MessageBox
                      class="msg-text"
                      text="안녕하세요! 😀"
                      isMyMsg
                    />
                    <p class="time">오후 8:54</p>
                  </li>
                  <li class="msg-item">
                    <MessageBox
                      class="msg-text"
                      text="천하를 설레는 용기가 황금시대의 그들은 그들의 같으며, 뿐이다. 어디 아니더면, 내는 것이다."
                      isMyMsg
                    />
                    <p class="time">오후 8:54</p>
                  </li>
                </ul>
              </div>
            </li>
            <!-- /./ 동적 항목 -->
          {/each}
        </ul>
      </div>
    </div>
    <div class="chat-input-box">
      <Input iconName="send" iconAlign="RIGHT" class="msg-input" />
    </div>
  </div>
</div>

<style lang="scss">
  .chat {
    display: grid;
    height: inherit;
    grid-template-rows: auto 1fr;
    gap: 24px;
    & :global(.title) {
      font-size: 16px;
      user-select: none;
    }
    &-wrap {
      display: grid;
      grid-auto-rows: 1fr auto;
      row-gap: 24px;
    }
    &-box {
      position: relative;
      height: 100%;
    }
    &-inner {
      border: 1px solid var(--color-gray-10);
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: 8px;
      overflow-y: auto;
    }
    &-date {
      position: relative;
      margin-top: 16px;
      &__text {
        position: relative;
        background: #fff;
        z-index: 5;
        width: max-content;
        text-align: center;
        margin: 0 auto;
        padding: 0 24px;
        color: #8a898e;
        font-size: 12px;
        font-weight: 400;
      }
      &:after {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        content: ' ';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-gray-10);
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      padding: 20px 16px;
      gap: 24px;
    }
    &-item {
      display: flex;
      align-items: flex-start;
    }
    &-profile {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 12px;
      justify-content: center;
      width: max-content;
      text-align: center;
      user-select: none;
      margin-right: 8px;
      &__name {
        color: #8a898e;
      }
    }
    & :global(.msg-input) {
      width: 100%;
    }
  }

  // 메시지 영역
  .msg {
    flex-wrap: wrap;
    flex: 1 1 auto;
    &-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      height: 100%;
    }
    &-item {
      width: 100%;
      display: flex;
      align-items: flex-end;
      gap: 8px;
      .time {
        display: none;
        flex: 0 0 auto;
        width: 50px;
        color: #8a898e;
        font-size: 12px;
        font-weight: 400;
      }
      &:last-child {
        .time {
          display: block;
        }
      }
    }
    & :global(.msg-text) {
      flex: 1 1 auto;
      max-width: fit-content;
    }
    &-list.isMyMsg {
      .msg-item {
        flex-direction: row-reverse;
      }
    }
  }
</style>
