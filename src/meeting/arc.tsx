import React, { useEffect, useState } from 'react';

import { Point } from './point';
import { sin, cos } from './trigonometry';

interface Props {
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
  color: string;
}

export default ({ center, radius, startAngle, endAngle, color }: Props) => {
  const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const x = center.x + radius * sin(startAngle);
    const y = center.y + radius * cos(startAngle);

    setStartPoint({ x, y });
  }, [center, radius, startAngle]);

  useEffect(() => {
    const x = center.x + radius * sin(endAngle);
    const y = center.y + radius * cos(endAngle);

    setEndPoint({ x, y });
  }, [center, radius, endAngle]);

  return (
    <path
      d={`M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 100 0 0 ${endPoint.x} ${endPoint.y}`}
      stroke={color}
      strokeWidth='8'
      fill='transparent'
    />
  );
};
