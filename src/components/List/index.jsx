const { v4: uuidv4 } = require('uuid');


export default function name(props) {
    const { items = [], ...rest } = props;
    return (
        <ul {...rest} key={uuidv4()}>
            {items.map(item => <li key={uuidv4()}>{item}</li>)}
        </ul>
    )
}