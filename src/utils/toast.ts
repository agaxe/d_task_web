import { get } from 'svelte/store';
import { ToastType } from '@/shared/type';
import { toastState } from '@/store/toast';

export function toast(
  message = '',
  option: Pick<ToastType['option'], 'ms'> = { ms: 5000 }
) {
  const storeState = get(toastState);
  const container = storeState.toastContainer;

  if (container) {
    const toastItem = document.createElement('div');

    toastItem.classList.add('toast-item');
    toastItem.classList.add('show');
    toastItem.innerHTML = `<p>${message}</p>`;
    container.appendChild(toastItem);

    //
    const length = container.childElementCount;
    const toastItemElement = container.getElementsByTagName('div')[length - 1];

    if (length) {
      setInterval(() => {
        toastItem.classList.add('hide');
        toastItemElement.remove();
      }, option.ms);
    }
  }
}
