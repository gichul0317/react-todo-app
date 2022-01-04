import { useState } from 'react';
import './InputField.scss';

function InputField(props) {
  const [todo, setToDo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    props.submit(todo);
    setToDo('');
  }

  const inputHandler = (e) => {
    setToDo(e.target.value);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <label className="form__label" htmlFor="text">Enter your todos</label>
      <input className="form__input" type="text"
        id="text" name="text" onChange={inputHandler} value={todo}
        placeholder="Add a todo"
        required
      />
      <button className="form__button" type="submit">Add</button>
    </form>
  )
}

export default InputField;