// import rootReducer from 'services/reducers/';
import taskReducer from 'services/taskSlice';
import { createTask } from 'services/taskSlice';
import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form';


const replaceMiddleware = store => next => action => {
    const invalidWords = ["fuck", "kill"];
    if (action.type === createTask.toString()) {
        action.payload.task = action.payload.task
            .split(" ")
            .map(word => invalidWords.includes(word) ? "***" : word)
            .join(" ");
    }
    return next(action);
}


export default configureStore({
    reducer: {
        task: taskReducer,
        form: formReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(replaceMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
