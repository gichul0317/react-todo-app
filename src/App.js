import { useState } from 'react';
import InputField from './Components/InputField/InputField';
import Output from './Components/Output/Output';
import './Partials/_setup.scss';


function App() {
  const [newData, setNewData] = useState([
    { id: 1, text: 'Enter your Todos!' },
  ]);


  const adddDataHandler = (data) => {
    if (!data || /^\s*$/.test(data)) {
      return;
    }
    setNewData(prevState => {
      const updatedData = [...prevState];
      updatedData.unshift({ id: (Math.random() * 5).toString(), text: data });
      return updatedData;
    });
  }

  const deleteDataHandler = id => {
    setNewData(prevState => {
      const updatedData = prevState.filter(item => item.id !== id);
      return updatedData;
    })
  }

  // const updateDataHandler = (id, value) => {
  //   setNewData(prevState => {
  //     prevState.map(item => {
  //       return (item.id === id ? value : item)
  //     })
  //   })
  // }

  let content = (
    <p style={{ textAlign: 'center' }}>Please add one...</p>
  );

  if (newData.length > 0) {
    content = (
      <Output data={newData} removedata={deleteDataHandler}
      // updatedata={updateDataHandler}
      />
    );
  }

  return (
    <>
      <InputField submit={adddDataHandler} />
      {content}
    </>
  );
}

export default App;
