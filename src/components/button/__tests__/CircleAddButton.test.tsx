import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import CircleAddButton from '..';

const mockFn = jest.fn();
test('should render without error', () => {
  const tree = render(<CircleAddButton onPressAddButton={mockFn} />);

  expect(tree).toMatchSnapshot();
});

test('Press add card button', () => {
  render(<CircleAddButton onPressAddButton={mockFn} />);

  fireEvent.press(screen.getByText('Add'));

  expect(mockFn).toBeCalled();
});
