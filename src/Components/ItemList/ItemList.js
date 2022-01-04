import './ItemList.scss';

function ItemList(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <li onClick={deleteHandler} className="list">
      {props.children}
    </li>
  )
}

export default ItemList;