export enum Theme {
  Bubblegum,
  Buttercup,
  Indigo,
  Lavender,
  Magenta,
  Navy,
  Orange,
  Oxblood,
  Perwinkle,
  Poppy,
  Purple,
  Seafoam,
  Sky,
  Tan,
  Teal,
  Yellow,
}

type HexColor = `#${string}`;
type Color = 'black' | 'white' | HexColor;

export const accentColor = (theme: Theme): Color => {
  switch (theme) {
    case Theme.Bubblegum:
    case Theme.Buttercup:
    case Theme.Lavender:
    case Theme.Orange:
    case Theme.Perwinkle:
    case Theme.Poppy:
    case Theme.Seafoam:
    case Theme.Sky:
    case Theme.Tan:
    case Theme.Teal:
    case Theme.Yellow:
      return 'black';
    case Theme.Indigo:
    case Theme.Magenta:
    case Theme.Navy:
    case Theme.Oxblood:
    case Theme.Purple:
      return 'white';
    default:
      throw new Error(`Unrecognized theme: ${theme}`);
  }
};

export const mainColor = (theme: Theme): Color => {
  switch (theme) {
    case Theme.Bubblegum:
      return '#ED80D1';
    case Theme.Buttercup:
      return '#FFF095';
    case Theme.Indigo:
      return '#360070';
    case Theme.Lavender:
      return '#CFCEFF';
    case Theme.Magenta:
      return '#A41377';
    case Theme.Navy:
      return '#001341';
    case Theme.Orange:
      return '#FF8A42';
    case Theme.Oxblood:
      return '#49060A';
    case Theme.Perwinkle:
      return '#8582FF';
    case Theme.Poppy:
      return '#FF5E5E';
    case Theme.Purple:
      return '#914AF1';
    case Theme.Seafoam:
      return '#CAEAE4';
    case Theme.Sky:
      return '#6D92FF';
    case Theme.Tan:
      return '#C29B7D';
    case Theme.Teal:
      return '#218F9E';
    case Theme.Yellow:
      return '#FFDF4D';
    default:
      throw new Error(`Unrecognized theme: ${theme}`);
  }
};
