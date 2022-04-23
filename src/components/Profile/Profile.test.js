import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Profile from './Profile';

test('test profile component', () => {
  const profile = render(<Provider store={store}><Profile /></Provider>);
  expect(profile).toMatchSnapshot();
  const message = screen.getByText('You have not joined any mission yet.');
  expect(message).toBeInTheDocument();
});
