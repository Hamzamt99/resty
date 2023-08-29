import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Components/Header';
import Results from '../Components/Results';
import Form from '../Components/Form';

test('check if the header is exists', () => {
  render(<Header />);
  const loadingText = screen.getByText(/RESTy/i);
  expect(loadingText).toBeTruthy();
});
test('displays loading text when loading is true', () => {
  render(<Results loading={false} />);
  const loadingText = screen.getByText(/loading.../i);
  expect(loadingText).toBeTruthy();
});

test('Form renders correctly', () => {
  render(<Form />);
  expect(screen.getByText(/URL:/i)).toBeTruthy();
  expect(screen.getByText(/GO!/i)).toBeTruthy();
  expect(screen.getByText(/GET/i)).toBeTruthy();
  expect(screen.getByText(/POST/i)).toBeTruthy();
  expect(screen.getByText(/PUT/i)).toBeTruthy();
  expect(screen.getByText(/DELETE/i)).toBeTruthy();
});
test('Form updates method when method is clicked', () => {
  render(<Form />);

  fireEvent.click(screen.getByText(/POST/i));

  expect(screen.getByText(/POST/i)).toBeTruthy()
});

