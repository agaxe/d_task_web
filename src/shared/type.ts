export type ColorThemeType =
  | 'purple'
  | 'bronze'
  | 'pink'
  | 'blue'
  | 'green'
  | 'gray'
  | 'red';

export type TagInputItemType = {
  id: number;
  value: string;
  theme?: ColorThemeType;
};

export type TagInputListType = TagInputItemType[];
