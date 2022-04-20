/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import loadMissions from '../apiFunctions';

const LOAD_MISSIONS = 'space-travelers-hub/Missions/LOAD_MISSIONS';
const MISSIONS_LOADED = 'space-travelers-hub/Missions/MISSIONS_LOADED';
const LOAD_MISSIONS_FAILED = 'space-travelers-hub/Missions/LOAD_MISSIONS_FAILED';

export const missionsLoad = () => (dispatch) => {
  dispatch({ type: LOAD_MISSIONS });
  loadMissions().then((result) => dispatch({ type: MISSIONS_LOADED, payload: result })).catch((error) => dispatch({ type: LOAD_MISSIONS_FAILED, payload: error }));
};

const initialState = {
  missions: [],
};

const missionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return { ...state, error: '', wait: true };
    case MISSIONS_LOADED:
      return { ...state, missions: [...state.missions, ...action.payload], wait: false };
    case LOAD_MISSIONS_FAILED:
      return { ...state, error: action.payload, wait: false };

    default:
      return state;
  }
};

export default missionsReducer;
