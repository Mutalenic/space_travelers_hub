/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import loadMissions from '../apiFunctions';

const LOAD_MISSIONS = 'space-travelers-hub/Missions/LOAD_MISSIONS';
const MISSIONS_LOADED = 'space-travelers-hub/Missions/MISSIONS_LOADED';
const LOAD_MISSIONS_FAILED = 'space-travelers-hub/Missions/LOAD_MISSIONS_FAILED';
const JOIN_MISSION = 'space-traveler/Missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-traveler/Missions/LEAVE_MISSION';

export const missionsLoad = () => (dispatch) => {
  dispatch({ type: LOAD_MISSIONS });
  loadMissions().then((result) => dispatch({ type: MISSIONS_LOADED, payload: result })).catch((error) => dispatch({ type: LOAD_MISSIONS_FAILED, payload: error }));
};
export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});
export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const initialState = {
  missions: [],
  joined: [],
};

const missionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return { ...state, error: '', wait: true };
    case MISSIONS_LOADED:
      return { ...state, missions: [...state.missions, ...action.payload], wait: false };
    case LOAD_MISSIONS_FAILED:
      return { ...state, error: action.payload, wait: false };
    case JOIN_MISSION:
    {
      const newState = state.missions.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        missions: [...newState],
      };
    }
    case LEAVE_MISSION:
    {
      const newState = state.missions.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return {
        ...state,
        missions: [...newState],
      };
    }

    default:
      return state;
  }
};

export default missionsReducer;
