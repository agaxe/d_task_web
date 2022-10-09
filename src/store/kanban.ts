import { writable } from 'svelte/store';
import { ColorThemeType, TagInputListType } from '@/shared/type';

interface KanbanStateType {
  kanbanList: {
    id: number;
    title: string;
    children: {
      id: number;
      title: string;
      desc: string;
      createdAt: string;
      tagList: {
        id: number;
        value: string;
        theme: ColorThemeType;
      }[];
    }[];
  }[];
  isShowKanbanModal: boolean;
  kanbanInfo: {
    title: string;
    desc: string;
    status: string;
    teams: TagInputListType;
    userName: string;
    createdAt: string;
    deadlineAt: string;
    detail: string;
    files: [
      {
        name: string;
        file: string;
      }
    ];
  };
}

export const kanbanInit: KanbanStateType = {
  kanbanList: [
    {
      id: 1,
      title: 'test title',
      children: [
        {
          id: 1,
          title: '타이틀',
          desc: '설명글 입니다.',
          createdAt: new Date().toISOString(),
          tagList: [
            {
              id: 1,
              value: '테스트1',
              theme: 'blue'
            },
            {
              id: 2,
              value: '테스트2',
              theme: 'green'
            },
            {
              id: 3,
              value: '테스트3',
              theme: 'bronze'
            }
          ]
        }
      ]
    }
  ],
  isShowKanbanModal: true,
  kanbanInfo: {
    title: '',
    desc: '',
    status: '',
    teams: [],
    userName: '홍길동',
    createdAt: '',
    deadlineAt: '',
    detail: '',
    files: [
      {
        name: '',
        file: ''
      }
    ]
  }
};

export const kanbanState = writable<KanbanStateType>(kanbanInit);
