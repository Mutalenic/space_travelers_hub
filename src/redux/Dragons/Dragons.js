import { loadDragons } from '../apiFunctions';

const ADD_DRAGONS = 'space_travelers_hub/Dragons/ADD_DRAGONS';
const DRAGONS_ADDED = 'space_travelers_hub/Dragons/DRAGONS_ADDED';
const DRAGONS_FAILED = 'space_travelers_hub/Dragons/DRAGONS_FAILED';
const RESERVE_DRAGONS = 'space_travelers_hub/Dragons/RESERVE_DRAGONS';
const CANCEL_DRAGONS = 'space_travelers_hub/Dragons/CANCEL_DRAGONS';

export const addDragons = () => (dispatch) => {
  dispatch({
    type: ADD_DRAGONS,
  });
  loadDragons().then((results) => dispatch({
    type: DRAGONS_ADDED,
    payload: results,
  })).catch((error) => dispatch({
    type: DRAGONS_FAILED,
    payload: error,
  }));
};

export const reserveDragons = (payload) => ({
  type: RESERVE_DRAGONS,
  payload,
});

export const cancelDragons = (payload) => ({
  type: CANCEL_DRAGONS,
  payload,
});

const initialState = {
  dragons: [],
};

export const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRAGONS:
      return {
        ...state,
        error: '',
        wait: true,
      };

    case DRAGONS_ADDED:
      return {
        ...state,
        dragons: [...state.dragons, ...action.payload],
        wait: false,
      };

    case DRAGONS_FAILED:
      return {
        ...state,
        error: action.payload,
        wait: false,
      };

    case RESERVE_DRAGONS:
    {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: true };
      });
      return {
        ...state,
        dragons: [...newState],
      };
    }

    case CANCEL_DRAGONS:
    {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: false };
      });
      return {
        ...state,
        dragons: [...newState],
      };
    }

    default:
      return state;
  }
};
