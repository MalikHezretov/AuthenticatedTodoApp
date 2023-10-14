import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import CircleAddButton from '..';

test('Press add card button', () => {
  const mockFn = jest.fn();

  render(<CircleAddButton onPressAddButton={mockFn} />);

  fireEvent.press(screen.getByText('Add'));

  expect(mockFn).toBeCalled();
});
