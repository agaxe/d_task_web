import { writable } from 'svelte/store';

export interface SearchResultInfoProps {
  title: string;
  desc: string;
  isActive: boolean;
}

export interface searchType {
  value: string;
  result: SearchResultInfoProps[];
}

export const searchDefault: searchType = {
  value: '',
  result: [...Array(10)].map((it, idx) => ({
    title: '서비스페이지',
    desc: '아티스트 히어로배너 텍스트 스타일 수정아티스트 히어로배너 텍스트 스타일 수정아티스트 히어로배너 텍스트 스타일 수정아티스트 히어로배너 텍스트 스타일 수정아티스트 히어로배너 텍스트 스타일 수정',
    isActive: idx % 2 === 0
  }))
};
export const search = writable<searchType>(searchDefault);
