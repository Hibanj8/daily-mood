// ConfirmationMessage.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MoodSelector from '../src/components/MoodSelector';

describe('MoodSelector component', () => {
    test('should call onSelect with correct mood when a mood is selected', () => {
        const mockOnSelect = jest.fn();
        const { getByTestId } = render(<MoodSelector onSelect={mockOnSelect} />);

        const happyRadio = getByTestId('radio-0');
        fireEvent.click(happyRadio);

        expect(mockOnSelect).toHaveBeenCalledWith('Heureux');
    });
});


