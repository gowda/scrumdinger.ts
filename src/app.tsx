import React from 'react';
import { Container } from 'react-bootstrap';

import Card from './card';
import { sampleData } from './daily-scrum';
import Meeting from './meeting';
import Scrums from './scrums';

export default () => (
  <Container fluid>
    <Scrums scrums={sampleData} />
    <Card {...sampleData[0]} />
    <Meeting />
  </Container>
);
