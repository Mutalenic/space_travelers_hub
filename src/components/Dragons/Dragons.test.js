import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Dragons from './Dragons';

describe('Dragons', () => {
  const dragon = {
    id: 'dragon1',
    name: 'Dragon 1',
    type: 'capsule',
    reserved: false,
  };

  render(
    <Provider store={store}>
      <div>
        <Dragons dragon={dragon} />
      </div>
    </Provider>,
  );
  const dragonRender = render(<Provider store={store}><Dragons /></Provider>);
  test('Take snapshot for Dragons', () => {
    expect(dragonRender).toMatchSnapshot();
  });
});
