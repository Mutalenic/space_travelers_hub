import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rocketsReducer } from './Rockets/rockets';
import missionsReducer from './Missions/Missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
