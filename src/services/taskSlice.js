import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        createTask(state, action) {
            state.tasks.push(action.payload.task);
        },
    }
});

const { actions, reducer } = taskSlice;

export const { createTask } = actions;
export default reducer;
