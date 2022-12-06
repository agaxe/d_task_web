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
    states: TagInputListType;
    teams: TagInputListType;
    userName: string;
    createdAt: string;
    deadlineAt: string;
    detail: string;
    files: {
      name: string;
      file: string | ArrayBuffer | null;
      size: string;
    }[];
  };
}

export const kanbanInit: KanbanStateType = {
  kanbanList: [
    {
      id: 1,
      title: 'test title 1',
      children: [
        {
          id: 1,
          title: '타이틀 1',
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
        },
        {
          id: 2,
          title: '타이틀 2',
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
        },
        {
          id: 3,
          title: '타이틀 3',
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
    },
    {
      id: 2,
      title: 'test title 2',
      children: [
        {
          id: 34,
          title: '타이틀 1',
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
        },
        {
          id: 21,
          title: '타이틀 2',
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
        },
        {
          id: 89,
          title: '타이틀 3',
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
  isShowKanbanModal: false,
  kanbanInfo: {
    title: '',
    desc: '',
    states: [],
    teams: [],
    userName: '홍길동',
    createdAt: '',
    deadlineAt: '2022-07-21T09:35:31.820Z',
    detail: '',
    files: []
  }
};

export const kanbanState = writable<KanbanStateType>(kanbanInit);
