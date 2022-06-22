import { useEffect, useState } from 'react';
import _ from 'lodash';

import { Arc } from '../arc';
import { DailyScrumTimer } from '../daily-scrum-timer';
import { Point } from '../point';

// eslint-disable-next-line import/prefer-default-export
export const useSpeakerArcs = (
  center: Point,
  radius: number,
  { totalSpeakers, currentSpeakerIndex, theme: { mainColor } }: DailyScrumTimer
) => {
  const [arcs, setArcs] = useState<Arc[]>([]);

  useEffect(() => {
    setArcs(
      _.range(0, totalSpeakers).map((index) => ({
        center,
        radius,
        startAngle: index * (360.0 / totalSpeakers),
        endAngle: index * (360.0 / totalSpeakers) + 360.0 / totalSpeakers,
        color: index < currentSpeakerIndex ? mainColor : 'transparent',
      }))
    );
  }, [center, radius, totalSpeakers, currentSpeakerIndex, mainColor]);

  return arcs;
};
