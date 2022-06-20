import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Scrums from './scrums';
import Scrum from './scrum';
import Meeting from './meeting';

export default () => (
  <BrowserRouter>
    <Container fluid>
      <Routes>
        <Route path='/' element={<Scrums />} />
        <Route path='/scrums/:id/meeting' element={<Meeting />} />
        <Route path='/scrums/:id' element={<Scrum />} />
      </Routes>
    </Container>
  </BrowserRouter>
);
