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
      name: '구가현'
    },
    {
      id: 2,
      name: '은승원'
    },
    {
      id: 3,
      name: '이혜빈'
    },
    {
      id: 4,
      name: '임상민'
    }
  ]
};
export const memberState = writable<MemberStateType>(memberInit);
