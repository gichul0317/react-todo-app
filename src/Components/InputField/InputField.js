import { useState } from 'react';
import './InputField.scss';

function InputField(props) {
  const [todo, setToDo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const submitted = {
      id: Math.random() * 2,
      text: todo,
    };
    props.submit(submitted);
    setToDo('');
  }

  const inputHandler = (e) => {
    setToDo(e.target.value);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <label className="form__label" htmlFor="text">Course Goal</label>
      <input className="form__input" type="text" id="text" onChange={inputHandler} value={todo} />
      <button className="form__button" type="submit">Add Goal</button>
    </form>
  )
}

export default InputField;