import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { registration } from './registration.reducer';
import { followup } from "./followup.reducer";


const rootReducer = combineReducers({
  authentication,
  registration,
  followup
});

export default rootReducer;
