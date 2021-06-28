import React from 'react';
import { render,waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import Posts from './containers/Posts/Posts';
import store from './redux/store';

test('renders the header correctly', () => {
  const { getByText } = render(<App />);
  const logo = getByText('Logo');
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('href', '/')
});


test('renders the header correctly', () => {
  const { getByTestId } = render(<Provider store={store}><Posts /></Provider>);
  const btn = getByTestId('ShufflePostsBtn');
  expect(btn).toBeInTheDocument();
});
