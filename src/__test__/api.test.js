import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

// Mock axios to simulate API requests
jest.mock('axios');

describe('App component', () => {
    it('should display request method and URL', () => {
        const { getByText } = render(<App />);
        expect(getByText('Request Method:')).toBeInTheDocument();
        expect(getByText('URL:')).toBeInTheDocument();
    });

    it('should make GET request and display response', async () => {
        const data = { id: 1, name: 'Example' };
        axios.get.mockResolvedValue({ data });

        const { getByText, getByTestId } = render(<App />);
        fireEvent.click(getByTestId('get-button'));

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('your-get-url');
            expect(getByText('Response:')).toBeInTheDocument();
            expect(getByText(JSON.stringify(data))).toBeInTheDocument();
        });
    });

    // Write similar tests for other HTTP methods like POST, PUT, DELETE
});
