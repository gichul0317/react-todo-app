import { useState } from 'react/cjs/react.development';
import './Output.scss';

function Output(props) {
  const clickHandler = (index) => {
    console.log('clicked');
    const updatedArr = props.data.filter(item => item.id !== index);
    console.log(updatedArr);
  }

  return (
    <div className="output">
      {
        props.data.map((item, i) => {
          return (
            <div
              className="output__contents"
              key={item.id}
              onClick={() => clickHandler(i)}
            >
              <p>
                {item.text}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Output;