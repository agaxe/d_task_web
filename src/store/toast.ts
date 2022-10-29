import { writable } from 'svelte/store';

export interface ToastStateType {
  toastContainer: HTMLDivElement | null;
}

export const toastInit: ToastStateType = {
  toastContainer: null
};

export const toastState = writable<ToastStateType>(toastInit);
