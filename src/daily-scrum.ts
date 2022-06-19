import { Theme } from './theme';

export interface DailyScrum {
  id: string;
  title: string;
  attendees: string[];
  lengthInMinutes: number;
  theme: Theme;
}

export const sampleData: DailyScrum[] = [
  {
    id: '001',
    title: 'Design',
    attendees: ['Cathy', 'Daisy', 'Simon', 'Jonathan'],
    lengthInMinutes: 10,
    theme: Theme.Yellow,
  },
  {
    id: '002',
    title: 'App Dev',
    attendees: ['Katie', 'Gray', 'Euna', 'Luis', 'Darla'],
    lengthInMinutes: 5,
    theme: Theme.Orange,
  },
  {
    id: '003',
    title: 'Web Dev',
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
    lengthInMinutes: 5,
    theme: Theme.Poppy,
  },
];
