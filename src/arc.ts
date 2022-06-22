import { Point } from './point';

export interface Arc {
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
  color: string;
}
