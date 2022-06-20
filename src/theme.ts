type HexColor = `#${string}`;
export type Color = 'inherit' | 'black' | 'white' | HexColor;

export interface Theme {
  name: string;
  mainColor: Color;
  accentColor: Color;
}

export const Themes: { [key: string]: Theme } = {
  Bubblegum: {
    name: 'Bubblegum',
    mainColor: '#ED80D1',
    accentColor: 'black',
  },
  Buttercup: {
    name: 'Buttercup',
    mainColor: '#FFF095',
    accentColor: 'black',
  },
  Indigo: {
    name: 'Indigo',
    mainColor: '#360070',
    accentColor: 'white',
  },
  Lavender: {
    name: 'Lavender',
    mainColor: '#CFCEFF',
    accentColor: 'black',
  },
  Magenta: {
    name: 'Magenta',
    mainColor: '#A41377',
    accentColor: 'white',
  },
  Navy: {
    name: 'Navy',
    mainColor: '#001341',
    accentColor: 'white',
  },
  Orange: {
    name: 'Orange',
    mainColor: '#FF8A42',
    accentColor: 'black',
  },
  Oxblood: {
    name: 'Oxblood',
    mainColor: '#49060A',
    accentColor: 'white',
  },
  Perwinkle: {
    name: 'Perwinkle',
    mainColor: '#8582FF',
    accentColor: 'black',
  },
  Poppy: {
    name: 'Poppy',
    mainColor: '#FF5E5E',
    accentColor: 'black',
  },
  Purple: {
    name: 'Purple',
    mainColor: '#914AF1',
    accentColor: 'white',
  },
  Seafoam: {
    name: 'Seaform',
    mainColor: '#CAEAE4',
    accentColor: 'black',
  },
  Sky: {
    name: 'Sky',
    mainColor: '#6D92FF',
    accentColor: 'black',
  },
  Tan: {
    name: 'Tan',
    mainColor: '#C29B7D',
    accentColor: 'black',
  },
  Teal: {
    name: 'Teal',
    mainColor: '#218F9E',
    accentColor: 'black',
  },
  Yellow: {
    name: 'Yellow',
    mainColor: '#FFDF4D',
    accentColor: 'black',
  },
};
