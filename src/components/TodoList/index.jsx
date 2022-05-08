import './style.scss';
import { useSelector } from 'react-redux';

import List from 'components/List';


export default function TodoList() {
    return (
        <List
            className="todo-list"
            items={useSelector(state => state.task.tasks)}
        />
    )
}