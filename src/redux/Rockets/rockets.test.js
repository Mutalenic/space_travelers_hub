import '@testing-library/jest-dom';
import {
  addRockets, bookRocket, cancelRocket, rocketsReducer,
} from './rockets';

describe('fetchRockets', () => {
  test('test fetchRocket function', () => {
    const result = addRockets();
    expect(typeof result).toBe('function');
  });
});

describe('bookRocket', () => {
  test('test bookRocket function', () => {
    const id = '1';
    const result = bookRocket(id);
    expect(typeof result).toBe('object');
  });
});

describe('cancelRocket', () => {
  test('test cancelRocket function', () => {
    const id = '1';
    const result = cancelRocket(id);
    expect(typeof result).toBe('object');
  });
});

describe('rocketsReducer', () => {
  test('test rocketsReducer empty action', () => {
    const initialState = {
      rockets: [],
    };
    const result = rocketsReducer(initialState, {});
    expect(result.rockets.length).toBe(0);
  });

  test('test rocketsReducer rockets loaded', () => {
    const initialState = {
      rockets: [],
    };
    const action = {
      type: 'space_travelers_hub/rockets/ROCKETS_ADDED',
      payload: ['rocket1', 'rocket2', 'rocket3'],
    };
    const result = rocketsReducer(initialState, action);
    expect(result.rockets.length).toBe(3);
  });

  test('test rocketsReducer add rockets', () => {
    const state = {
      rockets: [
        {
          id: '1', name: 'rocket 1', description: 'description 1', reserved: true,
        },
        { id: '2', name: 'rocket 2', description: 'description 2' },
        { id: '3', name: 'rocket 3', description: 'description 3' },
      ],
    };
    const action = {
      type: 'space_travelers_hub/rockets/BOOK_ROCKET',
      payload: '1',
    };
    const result = rocketsReducer(state, action);
    expect(result.rockets[0].reserved).toBe(true);
  });

  test('test rocketsReducer cancel rocket', () => {
    const state = {
      rockets: [
        { id: '1', name: 'rocket 1', description: 'description 1' },
        { id: '2', name: 'rocket 2', description: 'description 2' },
        {
          id: '3', name: 'rocket 3', description: 'description 3', reserved: true,
        },
      ],
    };
    const action = {
      type: 'space_travelers_hub/rockets/CANCEL_ROCKET',
      payload: '1',
    };
    const result = rocketsReducer(state, action);
    expect(result.rockets[2].reserved).toBe(true);
  });
});
