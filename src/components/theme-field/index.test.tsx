import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Field from '.';
import { Theme, Themes } from '../../theme';

describe('Theme field', () => {
  it('does not call onChange after clicking button twice', async () => {
    const theme = Themes.Navy;
    const mockOnChange = jest.fn((_: Theme) => {
      throw new Error('onChange should not be called');
    });

    render(<Field value={theme} onChange={mockOnChange} />);
    await waitFor(() => screen.getByText(theme.name));
    fireEvent.click(screen.getByText(theme.name));
    await waitFor(() => screen.getByText(Themes.Purple.name));
    fireEvent.click(screen.getAllByText(theme.name)[0]);
    await waitForElementToBeRemoved(() => screen.getByText(Themes.Purple.name));
  });

  it('calls onChange after selection', async () => {
    const theme = Themes.Navy;
    const mockOnChange = jest.fn((_: Theme) => false);

    render(<Field value={theme} onChange={mockOnChange} />);
    await waitFor(() => screen.getByText(theme.name));
    fireEvent.click(screen.getByText(theme.name));
    await waitFor(() => screen.getByText(Themes.Purple.name));
    fireEvent.click(screen.getByText(Themes.Purple.name));
    await waitFor(() => screen.getByText(Themes.Purple.name));
    expect(mockOnChange.mock.calls[0][0]).toBe(Themes.Purple);
  });
});
