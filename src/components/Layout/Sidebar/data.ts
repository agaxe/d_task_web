export interface menuItemType {
  id: string;
  icon: string;
  children: { id: number; name: string }[];
  isOpen: boolean;
}

export const initMenuList: menuItemType[] = [
  {
    id: 'project',
    icon: 'folder',
    children: [...Array(1)].map((item, idx) => ({
      id: idx + 1,
      name: `아트룸즈 ${idx + 1}`
    })), //! 컴포넌트에서 동적 데이터로 변경 예정
    isOpen: true
  },
  {
    id: 'member',
    icon: 'user-group',
    children: [
      {
        id: 1,
        name: '임상민'
      },
      {
        id: 2,
        name: '은승원'
      }
    ],
    isOpen: true
  }
];

//! 스크롤 테스트 데이터
// export const menuList = [...Array(20)].map((it) => ({
//   id: 'project',
//   icon: 'folder',
//   children: [...Array(3)] //! 컴포넌트에서 동적 데이터로 변경 예정
// }));
