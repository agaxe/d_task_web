import { writable } from 'svelte/store';

export interface searchType {
  value: string;
}

export const searchDefault: searchType = {
  value: ''
};
export const search = writable<searchType>(searchDefault);
