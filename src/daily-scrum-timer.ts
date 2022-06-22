export interface DailyScrumTimer {
  intervalID?: NodeJS.Timeout;
  speakers: string[];
  totalSpeakers: number;
  currentSpeaker: string;
  currentSpeakerIndex: number;
  secondsTotal: number;
  secondsPerSpeaker: number;
  statusText: string;
  lastSpeaker: boolean;
}
