import PropTypes from "prop-types"

function List2(prop){
    const category = prop.category;
    const itemList = prop.items;

    const listItems = itemList.map((item) => {
        return <li key = {item.name}>{item.name}: &nbsp;
        <b>{item.calories}</b></li>;
    });

    return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

List2.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name: PropTypes.string, calories: PropTypes.number})),
    // tak trzeba robic jak sie posiada tablice obiektow a chcemy sprawac typy naszych obiektow
}

List2.defaultProps = {
    category: "Category",
    items: [], 
}
export default List2