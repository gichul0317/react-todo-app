import ItemList from '../ItemList/ItemList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './Output.scss';


function Output(props) {
  return (
    <ul className="output">
      {
        props.data.map(item => {
          return (
            <ItemList key={item.id} id={item.id} onDelete={props.removedata} >
              {item.text}
              <div className="icons">
                <TiEdit />
              </div>
            </ItemList>
          )
        })
      }
    </ul>
  )
}

export default Output;