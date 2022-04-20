const ADD_ROCKETS = 'space_travelers_hub/rockets/GET_ROCKETS';
const RESERVE_ROCKETS_TOGGLE = 'space_travelers_hub/rockets/RESERVE_ROCKETS_TOGGLE';
const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

const toggleReserve = (payload) => ({
  type: RESERVE_ROCKETS_TOGGLE,
  payload,
});

const addRockets = () => async (dispatch) => {
  try {
    const fetchRocketData = await fetch(rocketsAPI);
    const rocketData = await fetchRocketData.json();
    dispatch({
      type: ADD_ROCKETS,
      payload: rocketData.map((rocket) => ({
        rocketId: rocket.id,
        rocketName: rocket.rocket_name,
        rocketDescription: rocket.description,
        rocketImage: rocket.flickr_images[0],
        rocketReserved: false,
      })),

    });
  } catch (error) { throw new Error(error); }
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
    { return [
      ...action.payload,
    ]; }

    case RESERVE_ROCKETS_TOGGLE: {
      const newState = state.map((rocket) => {
        if (rocket.rocketId.toString() !== action.payload.id) {
          return rocket;
        }
        return { ...rocket, rocketReserved: !rocket.rocketReserved };
      });
      return [...newState];
    }
    default:
      return state;
  }
};
export {
  addRockets, toggleReserve,
};

export default rocketsReducer;
