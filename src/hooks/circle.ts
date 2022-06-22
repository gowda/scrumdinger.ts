import { useState } from 'react';

import { Point } from '../point';

const createCenter = (width: number, height: number): Point => ({
  x: width / 2.0,
  y: height / 2.0,
});
const createRadius = (width: number, height: number): number =>
  Math.min(width, height) / 2.0 - 6;

// eslint-disable-next-line import/prefer-default-export
export const useCircle = (width: number, height: number) => {
  const [center] = useState<Point>(createCenter(width, height || width));
  const [radius] = useState<number>(createRadius(width, height || width));

  return {
    center,
    radius,
  };
};
