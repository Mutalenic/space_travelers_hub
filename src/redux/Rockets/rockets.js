import { loadRockets } from '../apiFunctions';

const ADD_ROCKETS = 'space_travelers_hub/rockets/ADD_ROCKETS';
const ROCKETS_ADDED = 'space_travelers_hub/rockets/ROCKETS_ADDED';
const ROCKETS_FAILED = 'space_travelers_hub/rockets/ROCKETS_FAILED';
const BOOK_ROCKET = 'space_travelers_hub/rockets/BOOK_ROCKET';
const CANCEL_ROCKET = 'space_travelers_hub/rockets/CANCEL_ROCKET';

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

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

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

    case BOOK_ROCKET:
    {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: [...newState],
      };
    }

    case CANCEL_ROCKET:
    {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: [...newState],
      };
    }

    default:
      return state;
  }
};
