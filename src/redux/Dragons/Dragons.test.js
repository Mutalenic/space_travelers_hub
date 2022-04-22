import '@testing-library/jest-dom';
import { dragonsReducer, addDragons, reserveDragons } from './Dragons';

describe('dragonsLoad', () => {
  test('test dragonsLoad function', () => {
    const result = addDragons();
    expect(typeof result).toBe('function');
  });
});

describe('reserveDragon', () => {
  test('test reserveDragon function', () => {
    const id = 2;
    const results = reserveDragons(id);
    expect(typeof results).toBe('object');
  });
});

describe('dragonsReducer', () => {
  test('test dragonsReducer empty action', () => {
    const initialState = {
      dragons: [],
    };
    const results = dragonsReducer(initialState, {});
    expect(results.dragons.length).toBe(0);
  });
  test('test dragonsReducer empty action', () => {
    const initialState = {
      dragons: [],
    };
    const results = dragonsReducer(initialState, {});
    expect(results.dragons.length).toBe(0);
  });
  test('test dragonsReducer and await dragons', () => {
    const initialState = {
      dragons: [],
    };
    const action = {
      type: 'space_travelers_hub/Dragons/ADD_DRAGONS',
    };
    const results = dragonsReducer(initialState, action);
    expect(results.wait).toBe(true);
  });
  test('test dragonsReducer dragonsLoad', () => {
    const initialState = {
      dragons: [],
    };
    const action = {
      type: 'space_travelers_hub/Dragons/DRAGONS_ADDED',
      payload: ['dragon1', 'dragon2', 'dragon3', 'dragon4'],
    };
    const result = dragonsReducer(initialState, action);
    expect(result.wait).toBe(false);
    expect(result.dragons.length).toBe(4);
  });

  test('test dragonsReducer dragonsLoad failed', () => {
    const initialState = {
      dragons: [],
    };
    const action = {
      type: 'space_travelers_hub/Dragons/DRAGONS_FAILED',
      payload: 'error fetching data',
    };
    const result = dragonsReducer(initialState, action);
    expect(result.wait).toBe(false);
    expect(result.error).toBe('error fetching data');
  });

  test('test dragonsReducer reserveDragon', () => {
    const state = {
      dragons: [
        { id: 1, name: 'dragon 1', description: 'description 1' },
        { id: 2, name: 'dragon 2', description: 'description 2' },
        {
          id: 3, name: 'dragon 3', description: 'description 3', reserved: true,
        },
      ],
    };
    const action = {
      type: 'space-travelers-hub/Dragons/RESERVE_OR_CANCEL_DRAGONS',
      payload: 2,
    };
    const results = dragonsReducer(state, action);
    expect(results.dragons[2].reserved).toBe(true);
  });

  test('test dragonsReducer cancel reserve dragons', () => {
    const state = {
      dragons: [
        { id: 1, name: 'dragon 1', description: 'description 1' },
        { id: 2, name: 'dragon 2', description: 'description 2' },
        {
          id: 3, name: 'dragon 3', description: 'description 3', reserved: false,
        },
      ],
    };
    const action = {
      type: 'space-travelers-hub/Dragons/RESERVE_OR_CANCEL_DRAGONS',
      payload: 2,
    };
    const result = dragonsReducer(state, action);
    expect(result.dragons[2].reserved).toBe(false);
  });
});
