import { createReducer } from '@reduxjs/toolkit';
import { CREATE_TASK } from 'services/actions/task';


const initialState = {
    tasks: []
}

export default createReducer(initialState, {
    [CREATE_TASK]: (state, action) => ({ tasks: state.tasks.concat(action.payload.task) }),
})
