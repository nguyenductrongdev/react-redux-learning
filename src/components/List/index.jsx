export default function name(props) {
    const { items = [], ...rest } = props;
    return (
        <ul {...rest}>
            {items.map(item => <li>{item}</li>)}
        </ul>
    )
}