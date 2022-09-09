import { writable } from 'svelte/store';

interface AsideStateType {
  isActive: boolean;
  activeType: 'SEARCH' | 'NOTICE';
}
export const asideInit: AsideStateType = {
  isActive: false,
  activeType: 'SEARCH'
};
export const asideState = writable<AsideStateType>(asideInit);
