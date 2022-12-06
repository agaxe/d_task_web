declare module 'svelte-inline-svg' {
  import { SvelteComponentTyped } from 'svelte';
  export declare class InlineSvgProps {
    src: string;
    transformSrc?: (src: SVGElement) => SVGElement;
    [attribute: string]: unknown;
  }
  export default class InlineSvg extends SvelteComponentTyped<InlineSvgProps> {}
}

declare type Item = import('svelte-dnd-action').Item;
declare type DndEvent<ItemType = Item> =
  import('svelte-dnd-action').DndEvent<ItemType>;
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onconsider?: (
      event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T }
    ) => void;
    onfinalize?: (
      event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T }
    ) => void;
  }
}
