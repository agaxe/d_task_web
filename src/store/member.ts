import { writable } from 'svelte/store';

interface MemberStateType {
  memberList: {
    id: number;
    name: string;
  }[];
}

export const memberInit: MemberStateType = {
  memberList: [
    {
      id: 1,
      name: '강소영'
    },
    {
      id: 2,
      name: '권현정'
    },
    {
      id: 3,
      name: '남영화'
    },
    {
      id: 4,
      name: '김시정'
    }
  ]
};
export const memberState = writable<MemberStateType>(memberInit);
