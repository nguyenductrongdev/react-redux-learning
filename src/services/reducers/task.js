import { CREATE_TASK } from '../actions/task';

const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_TASK:
            return {
                tasks: [...state.tasks, action.payload.task]
            }

        default:
            return state;
    }
}

export default taskReducer;