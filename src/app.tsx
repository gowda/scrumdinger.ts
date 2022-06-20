import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import NewScrum from './new-scrum';
import Scrums from './scrums';
import Scrum from './scrum';
import EditScrum from './edit-scrum';
import Meeting from './meeting';

export default () => (
  <BrowserRouter>
    <Container fluid>
      <Row className='justify-content-center'>
        <Col xs={12} sm={6}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Scrums />} />
            <Route path='/scrums/new' element={<NewScrum />} />
            <Route path='/scrums/:id/meeting' element={<Meeting />} />
            <Route path='/scrums/:id/edit' element={<EditScrum />} />
            <Route path='/scrums/:id' element={<Scrum />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </BrowserRouter>
);
