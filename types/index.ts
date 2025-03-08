export type Galleries =
  | 'flat-memorials'
  | 'bevel-memorials'
  | 'slant-memorials'
  | 'upright-memorials'
  | 'bronze-plaques'
  | 'pet-memorials'
  | 'granite-benches'
  | 'granite-colors';

export type ImageMetadata = {
  key?: string;
  url?: string;
  lastModified?: Date;
  size?: number;
};
