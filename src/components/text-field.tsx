import React from 'react';

interface Props {
  placeholder?: string;
  value?: string;
  onChange: (change: string) => void;
  onCommit?: () => void;
}

export default ({
  placeholder,
  value,
  onChange,
  onCommit = () => true,
}: Props) => (
  <input
    type='text'
    className='form-control rounded-0 border-start-0 border-end-0 border-top-0 px-0 py-1 shadow-none'
    placeholder={placeholder}
    value={value || ''}
    onChange={({ target: { value: change } }) => onChange(change)}
    onKeyPress={({ key }) => (key === 'Enter' ? onCommit() : false)}
  />
);
