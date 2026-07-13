import type { SvgIconProps } from './types';

export function SvgIcon({ width, height, viewBox, paths }: SvgIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      aria-hidden
    >
      {paths.map((path, index) => (
        <path key={index} {...path} />
      ))}
    </svg>
  );
}

export type { SvgIconProps, SvgPathDef } from './types';
