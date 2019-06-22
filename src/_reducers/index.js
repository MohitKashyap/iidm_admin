import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { registration } from './registration.reducer';
import { followup } from "./followup.reducer";
import { query } from "./query.reducer";


const rootReducer = combineReducers({
  authentication,
  registration,
  followup,
  query
});

export default rootReducer;
