import React from 'react';

import Header from './header';
import List from './list';
import { DailyScrum } from '../daily-scrum';

interface Props {
  scrums: DailyScrum[];
}

export default ({ scrums }: Props) => (
  <>
    <Header />
    <List scrums={scrums} />
  </>
);
