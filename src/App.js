import { useState } from 'react';
import InputField from './Components/InputField/InputField';
import Output from './Components/Output/Output';
import './Partials/_setup.scss';


function App() {
  const [data, setData] = useState([
    { id: 1, text: "what's up?" },
  ]);

  const childFromParent = (data) => {
    setData(prevState => {
      const updated = [...prevState];
      updated.unshift({ id: Math.random().toString(), text: data });
      return updated;
    });
  }

  const deleteData = (id) => {
    setData(prevState => {
      const updated = prevState.filter(item => item.id !== id);
      return updated;
    })
  }

  let content = '';

  if (data.length === 0) {
    content = <p style={{ textAlign: 'center', fontSize: '2rem' }}>Please add your todo...</p>
  } else {
    content = <Output data={data} deleteData={deleteData} />
  }

  return (
    <>
      <InputField pass={childFromParent} />
      {content}
    </>
  )
}

export default App;
