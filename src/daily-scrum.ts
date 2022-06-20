import { Theme, Themes } from './theme';

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

export const sampleData: DailyScrum[] = [
  {
    id: '001',
    meetingInfo: {
      title: 'Design',
      lengthInMinutes: 10,
      theme: Themes.Yellow,
    },
    attendees: ['Cathy', 'Daisy', 'Simon', 'Jonathan'],
  },
  {
    id: '002',
    meetingInfo: {
      title: 'App Dev',
      lengthInMinutes: 5,
      theme: Themes.Orange,
    },
    attendees: ['Katie', 'Gray', 'Euna', 'Luis', 'Darla'],
  },
  {
    id: '003',
    meetingInfo: {
      title: 'Web Dev',
      lengthInMinutes: 5,
      theme: Themes.Poppy,
    },
    attendees: [
      'Chella',
      'Chris',
      'Christina',
      'Eden',
      'Karla',
      'Lindsey',
      'Aga',
      'Chad',
      'Jenn',
      'Sarah',
    ],
  },
];
