import { Page } from '@sveltejs/kit';
import { goto } from '$app/navigation';

export function clickOutSide(node: any) {
  function handleClick(event: any) {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent('outclick'));
    }
  }
  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}

export function setQueryString(
  page: Page,
  { key, value }: { key: string; value: string }
) {
  page.url.searchParams.set(key, value);
  goto(`?${page.url.searchParams.toString()}`);
}

export function getQueryString(page: Page, key = '') {
  return page.url.searchParams.get(key);
}
