// ConfirmationMessage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ConfirmationMessage from '../src/components/ConfirmationMessage';
import '@testing-library/jest-dom';

test('renders confirmation message correctly', () => {
  const mood = 'Heureux';
  const { getByText } = render(<ConfirmationMessage mood={mood} />);
  
  const moodText = getByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      element.textContent.includes(`Votre humeur du jour : ${mood}`)
    );
  });
  const successMessage = getByText('Votre réponse a été enregistrée avec succès.');
  
  expect(moodText).toBeInTheDocument();
  expect(successMessage).toBeInTheDocument();
});

