import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rocketsReducer } from './Rockets/rockets';
import missionsReducer from './Missions/Missions';
import { dragonsReducer } from './Dragons/Dragons';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
  dragonsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
