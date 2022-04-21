// import { type } from '@testing-library/user-event/dist/type';
// import { wait } from '@testing-library/user-event/dist/utils';
import { loadDragons } from '../apiFunctions';

const ADD_DRAGONS = 'space_travelers_hub/Dragons/ADD_DRAGONS';
const DRAGONS_ADDED = 'space_travelers_hub/Dragons/DRAGONS_ADDED';
const DRAGONS_FAILED = 'space_travelers_hub/Dragons/DRAGONS_FAILED';

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

    default:
      return state;
  }
};
