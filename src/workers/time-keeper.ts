import { DailyScrum } from '../daily-scrum';
import { DailyScrumTimer } from '../daily-scrum-timer';

// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

interface TimeKeeperMessage {
  action: 'start' | 'skip' | 'stop';
  payload?: DailyScrum;
}

let scrum: DailyScrumTimer;

const createText = () => {
  if (scrum.lastSpeaker) {
    return 'Last speaker';
  }

  return `Speaker ${scrum.currentSpeakerIndex + 1} of ${scrum.speakers.length}`;
};
const isLastSpeaker = (index: number) => scrum.speakers.length - 1 === index;
const changeSpeaker = () => {
  scrum.currentSpeakerIndex += 1;
  scrum.currentSpeaker = scrum.speakers[scrum.currentSpeakerIndex];
  scrum.lastSpeaker = isLastSpeaker(scrum.currentSpeakerIndex);
  scrum.statusText = createText();
  ctx.postMessage(scrum);
};

const updateTimer = () => {
  if (isLastSpeaker(scrum.currentSpeakerIndex) && scrum.intervalID) {
    clearInterval(scrum.intervalID);
    scrum.intervalID = undefined;
  } else {
    changeSpeaker();
  }
};
const startTimer = ({
  meetingInfo: { lengthInMinutes, theme },
  attendees,
}: DailyScrum) => {
  const secondsTotal = lengthInMinutes * 60;
  const secondsPerSpeaker =
    attendees.length > 0 ? secondsTotal / attendees.length : 0;

  scrum = {
    speakers: attendees,
    totalSpeakers: attendees.length,
    currentSpeakerIndex: 0,
    currentSpeaker: attendees[0],
    lastSpeaker: false,
    intervalID: setInterval(updateTimer, secondsPerSpeaker * 1000),
    lengthInMinutes,
    secondsPerSpeaker,
    statusText: `Speaker 1 of ${attendees.length}`,
    theme,
  };

  ctx.postMessage(scrum);
};

const skipSpeaker = () => changeSpeaker();

const stopTimer = () =>
  scrum.intervalID ? clearInterval(scrum.intervalID) : false;

ctx.addEventListener('message', ({ data }: MessageEvent<TimeKeeperMessage>) => {
  switch (data.action) {
    case 'start':
      if (data.payload) {
        startTimer(data.payload!);
      } else {
        throw new Error(`DailyScrum is required for starting the timer`);
      }
      break;
    case 'skip':
      skipSpeaker();
      break;
    case 'stop':
      stopTimer();
      break;
    default:
      throw new Error(`Unrecognized action ${data.action}`);
  }
});
