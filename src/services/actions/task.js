const CREATE_TASK = "CREATE_TASK";

const createTask = task => ({
    type: CREATE_TASK,
    payload: { task }
})

export {
    CREATE_TASK,
    createTask,
};