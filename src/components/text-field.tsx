import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface Props {
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  onChange: (change: string) => void;
  onCommit?: () => void;
}

export default ({
  placeholder,
  value,
  errorMessage,
  onChange,
  onCommit = () => true,
}: Props) => (
  <>
    <Row className='align-items-center'>
      <Col>
        <input
          type='text'
          className='form-control rounded-0 border-start-0 border-end-0 border-top-0 px-0 py-1 shadow-none'
          placeholder={placeholder}
          value={value || ''}
          onChange={({ target: { value: change } }) => onChange(change)}
          onKeyPress={({ key }) => (key === 'Enter' ? onCommit() : false)}
        />
      </Col>
    </Row>
    {errorMessage && (
      <Row className='mt-1'>
        <Col>
          <span className='text-danger'>{errorMessage}</span>
        </Col>
      </Row>
    )}
  </>
);
