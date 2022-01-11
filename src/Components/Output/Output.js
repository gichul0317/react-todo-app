import './Output.scss';

function Output(props) {
  return (
    <ul className='output'>
      {
        props.data.map(item => {
          return (
            <li className='output__list' key={item.id}
              onClick={() => { props.deleteData(item.id) }}
            >
              {item.text}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Output;