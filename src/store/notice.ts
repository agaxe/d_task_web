import { writable } from 'svelte/store';

interface NoticeStateType {
  noticeList: {
    user: {
      id: number;
      name: string;
      profileImg: string;
    };
    desc: string;
    createdAt: string;
  }[];
}
export const noticeInit: NoticeStateType = {
  noticeList: [...Array(5)].map((it) => ({
    user: {
      id: 1,
      name: '홍길동',
      profileImg:
        'https://i.pinimg.com/236x/32/04/f9/3204f9d8919d2351a5226bdee3b6af90.jpg'
    },
    desc: `프로젝트 ‘아트룸즈' 개설`,
    createdAt: '2022-09-09T06:54:35.376Z'
  }))
};
export const noticeState = writable<NoticeStateType>(noticeInit);
