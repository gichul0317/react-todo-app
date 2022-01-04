import { useState } from 'react';
import InputField from './Components/InputField/InputField';
import Output from './Components/Output/Output';
import './App.css';


function App() {
  const todoArr = [
    {
      id: 1,
      text: 'Do all exercise!',
    },
  ];

  const [newData, setNewData] = useState(todoArr);


  const submittedData = (data) => {
    console.log(data);
    setNewData(prevState => {
      return [...prevState, data];
    });
  }

  return (
    <>
      <InputField submit={submittedData} />
      <Output data={newData} />
    </>
  );
}

export default App;
