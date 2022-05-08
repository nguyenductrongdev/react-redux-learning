import { combineReducers } from 'redux';

import taskReducer from './task';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    task: taskReducer,
    form: formReducer,
})

export default rootReducer;