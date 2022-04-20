// import { type } from '@testing-library/user-event/dist/type';
// import { wait } from '@testing-library/user-event/dist/utils';
import { loadRockets } from '../apiFunctions';

const ADD_ROCKETS = 'space_travelers_hub/rockets/ADD_ROCKETS';
const ROCKETS_ADDED = 'space_travelers_hub/rockets/ROCKETS_ADDED';
const ROCKETS_FAILED = 'space_travelers_hub/rockets/ROCKETS_FAILED';

export const addRockets = () => (dispatch) => {
  dispatch({
    type: ADD_ROCKETS,
  });
  loadRockets().then((results) => dispatch({
    type: ROCKETS_ADDED,
    payload: results,
  })).catch((error) => dispatch({
    type: ROCKETS_FAILED,
    payload: error,
  }));
};

const initialState = {
  rockets: [],
};

export const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return {
        ...state,
        error: '',
        wait: true,
      };

    case ROCKETS_ADDED:
      return {
        ...state,
        rockets: [...state.rockets, ...action.payload],
        wait: false,
      };

    case ROCKETS_FAILED:
      return {
        ...state,
        error: action.payload,
        wait: false,
      };

    default:
      return state;
  }
};
