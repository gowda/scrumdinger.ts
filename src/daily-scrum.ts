import { Theme } from './theme';

export interface DailyScrumMeetingInfo {
  title: string;
  lengthInMinutes: number;
  theme: Theme;
}

type Attendee = string;

export interface DailyScrum {
  id: string;
  meetingInfo: DailyScrumMeetingInfo;
  attendees: Attendee[];
}
