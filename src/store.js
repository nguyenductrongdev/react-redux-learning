import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'services/reducers/';
import { CREATE_TASK } from 'services/actions/task'

const replaceMiddleware = store => next => action => {
    const invalidWords = ["fuck", "kill"];
    if (action.type === CREATE_TASK) {
        action.payload.task = action.payload.task
            .split(" ")
            .map(word => invalidWords.includes(word) ? "***" : word)
            .join(" ");
    }
    return next(action);
}

const store = createStore(
    rootReducer,
    applyMiddleware(replaceMiddleware),
);

export default store;