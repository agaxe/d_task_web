import { writable } from 'svelte/store';

export const countInit = 0;
export const countState = writable<number>(countInit);
