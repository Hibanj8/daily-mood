import React from 'react';
import SubmitButton from '../src/components/SubmitButton';
import { render, fireEvent } from '@testing-library/react';


test('renders submit button correctly', () => {
  const onSubmit = jest.fn();
  const { getByText } = render(<SubmitButton onSubmit={onSubmit} />);
  const submitButton = getByText('Soumettre');
  fireEvent.click(submitButton);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});