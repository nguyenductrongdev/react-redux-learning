import { useDispatch } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { createTask } from '../../services/actions/task';



function TodoListForm({ handleSubmit }) {
    const dispatch = useDispatch();

    const handleOnSubmit = ({ txtTask }) => {
        if (txtTask) {
            dispatch(createTask(txtTask));
        };
        dispatch(reset('TodoListForm'));
    }

    return (
        <form action="#" onSubmit={handleSubmit(handleOnSubmit)}>
            <Field name="txtTask" component="input" type="text" />
            <button>Create</button>
        </form>
    )
}

export default reduxForm({
    form: 'TodoListForm'
})(TodoListForm);