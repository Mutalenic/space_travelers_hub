import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Navbar from './Navbar';

test('test Navbar component', () => {
  const navbar = render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );
  expect(navbar).toMatchSnapshot();
  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
  const link = screen.getByText('Missions');
  expect(link).toBeInTheDocument();
});
