import Svg, { Path } from 'react-native-svg';
import type { SvgIconProps } from './types';

export function SvgIcon({ width, height, viewBox, paths }: SvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      {paths.map((path, index) => (
        <Path key={index} fill="none" {...path} />
      ))}
    </Svg>
  );
}

export type { SvgIconProps, SvgPathDef } from './types';
