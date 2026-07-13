export type SvgPathDef = {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'butt' | 'square';
  fill?: string;
};

export type SvgIconProps = {
  width: number;
  height: number;
  viewBox: string;
  paths: SvgPathDef[];
};
