import { Page } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { ko } from 'date-fns/locale';

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

/**
 * - 넓이를 리사이징할 때 사용되는 함수입니다.
 * @param node - 해당 element
 * @param info.varName - 해당 element 의 넓이 css 변수
 * @param info.moveDirection - 리사이징 시 이동하는 마우스 방향
 */
export function useResize(
  node: HTMLElement,
  [varName, moveDirection = 'right']: [string, 'right' | 'left']
) {
  function resize(e: MouseEvent) {
    const root = document.documentElement;
    function getVariableValue(value: string) {
      return Number(
        getComputedStyle(node).getPropertyValue(value)?.replace('px', '')
      );
    }
    const minWidth = getVariableValue(`${varName}-min`);
    const maxWidth = getVariableValue(`${varName}-max`);
    const value = moveDirection === 'right' ? e.x : root.clientWidth - e.x;

    if (minWidth <= value && maxWidth >= value) {
      root.style.setProperty(varName, `${value}px`);
    }
  }

  node.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', resize, false);
    document.addEventListener(
      'mouseup',
      () => {
        document.removeEventListener('mousemove', resize, false);
      },
      false
    );
  });

  return {
    destroy() {
      node.removeEventListener('mousedown', () => {}, false);
      document.removeEventListener('mousemove', resize, false);
      document.removeEventListener('mouseup', resize, false);
    }
  };
}

//* date
export function isoDateToFormatString(
  date: string,
  formatString = 'yyyy-MM-dd'
) {
  return format(parseISO(date), formatString);
}
export function dateToFormatString(
  date: Date,
  formatString = 'yyyy-MM-dd',
  locale: Locale = ko
) {
  return format(date, formatString, { locale });
}

//* file
export function getBase64FromFile(
  file: File
): Promise<string | ArrayBuffer | null> {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
}
export function getFileSizeString(bytes: number) {
  const idx = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    Number((bytes / Math.pow(1024, idx)).toFixed(2)) * 1 +
    ['B', 'kB', 'MB', 'GB', 'TB'][idx]
  );
}
