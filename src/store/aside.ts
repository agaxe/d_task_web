import { writable } from 'svelte/store';

interface AsideStateType {
  isActive: boolean;
}
export const asideInit: AsideStateType = {
  isActive: false
};
export const asideState = writable<AsideStateType>(asideInit);
