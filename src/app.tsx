import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NewScrum from './new-scrum';
import Scrums from './scrums';
import Scrum from './scrum';
import EditScrum from './edit-scrum';
import Meeting from './meeting';

export default () => (
  <BrowserRouter>
    <Container fluid>
      <Routes>
        <Route path='/' element={<Scrums />} />
        <Route path='/scrums/new' element={<NewScrum />} />
        <Route path='/scrums/:id/meeting' element={<Meeting />} />
        <Route path='/scrums/:id/edit' element={<EditScrum />} />
        <Route path='/scrums/:id' element={<Scrum />} />
      </Routes>
    </Container>
  </BrowserRouter>
);
