import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './Output.scss';


function Output(props) {
  const [edit, setEdit] = useState({
    id: null,
    text: '',
  });

  const editHandler = (val) => {
    console.log('click');
    props.updatedata(edit.id, val);
    setEdit({
      id: null,
      text: '',
    });
  }

  return (
    <ul className="output">
      {
        props.data.map(item => {
          return (
            <li key={item.id} className="output__list">
              {item.text}
              <div className="output__icons">
                <RiCloseCircleLine className="output__close"
                  onClick={() => props.removedata(item.id)}
                />
                <TiEdit className="output__edit"

                />
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Output;