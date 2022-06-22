import { Theme } from './theme';

export interface DailyScrumTimer {
  intervalID?: NodeJS.Timeout;
  speakers: string[];
  totalSpeakers: number;
  currentSpeaker: string;
  currentSpeakerIndex: number;
  lastSpeaker: boolean;
  lengthInMinutes: number;
  secondsPerSpeaker: number;
  statusText: string;
  theme: Theme;
}
