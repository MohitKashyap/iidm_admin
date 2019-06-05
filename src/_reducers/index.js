import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { registration } from './registration.reducer';


const rootReducer = combineReducers({
  authentication,
  registration
});

export default rootReducer;
