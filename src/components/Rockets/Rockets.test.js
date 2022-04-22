import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from './Rockets';

describe('Rockets', () => {
  const rocket = {
    id: '1',
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system',
    reserved: false,
  };

  render(
    <Provider store={store}>
      <div>  
          <Rockets rocket={rocket} />
        </div>
    </Provider>,
  );
  const rocketRender = render(<Provider store={store}><Rockets /></Provider>);
  test('Take snapshot for Rockets', () => {
    expect(rocketRender).toMatchSnapshot();
   });
});
