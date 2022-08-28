export const menuList = [
  {
    id: 'project',
    icon: 'folder',
    children: [...Array(3)] //! 컴포넌트에서 동적 데이터로 변경 예정
  },
  {
    id: 'member',
    icon: 'user-group'
  }
];

//! 스크롤 테스트 데이터
// export const menuList = [...Array(20)].map((it) => ({
//   id: 'project',
//   icon: 'folder',
//   children: [...Array(3)] //! 컴포넌트에서 동적 데이터로 변경 예정
// }));
