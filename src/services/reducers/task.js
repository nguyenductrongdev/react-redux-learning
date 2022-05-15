import { createReducer } from '@reduxjs/toolkit';
import { createTask } from 'services/actions/task';


const initialState = {
    tasks: []
}

export default createReducer(initialState, {
    [createTask.toString()]: (state, action) => ({ tasks: state.tasks.concat(action.payload.task) }),
})
