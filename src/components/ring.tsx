import React from 'react';

import { Point } from '../point';

interface Props {
  center: Point;
  radius: number;
  color: string;
}

export default ({ center: { x, y }, radius, color }: Props) => (
  <>
    <circle
      cx={x}
      cy={y}
      r={radius - 4}
      stroke='black'
      strokeWidth='2'
      fill='transparent'
    />
    <circle
      cx={x}
      cy={y}
      r={radius}
      stroke={color}
      strokeWidth='8'
      fill='transparent'
    />
    <circle
      cx={x}
      cy={y}
      r={radius + 4}
      stroke='black'
      strokeWidth='2'
      fill='transparent'
    />
  </>
);
