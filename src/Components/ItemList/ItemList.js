import './ItemList.scss';

function ItemList(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <li className="list">
      {props.children}
    </li>
  )
}

export default ItemList;