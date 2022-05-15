import rootReducer from 'services/reducers/';
import { createTask } from 'services/actions/task';
import { configureStore } from '@reduxjs/toolkit'


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
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(replaceMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
