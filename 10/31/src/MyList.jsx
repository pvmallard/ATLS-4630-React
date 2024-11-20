export default function MyList() {
    const items = [
    { name: 'List item 1', id: 1 },
    { name: 'List item 2', id: 2 },
    { name: 'List item 3', id: 3 },
    ];
    const mappedItems = items.map(item =>
    <li key={item.id}>{item.name}</li>
    );
    return (
    <ul>{mappedItems}</ul>
    );
}
    