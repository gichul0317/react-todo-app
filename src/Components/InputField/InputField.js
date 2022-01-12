import { useState } from 'react';
import Button from '../Button/Button';
import './InputField.scss';

function InputField(props) {
  const [text, setText] = useState('');
  const [valid, setValid] = useState(true);

  const changeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setValid(true);
    }
    setText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setValid(false);
      return;
    }
    props.pass(text);
    setText('');
  }

  return (
    <form className='form' onSubmit={submitHandler}>
      <label className={`form__label${!valid ? '--invalid' : ''}`} htmlFor="text" id="text">What is up to?</label>
      <input className={
        !valid ? 'form__input--invalid' : 'form__input'
      }
        type="text"
        id="text"
        placeholder='add your to do here'
        onChange={changeHandler}
        value={text}
      />
      <button className='form__button' type='submit'>Add ToDo</button>
      <Button>Add ToDo</Button>
    </form>
  )
}

export default InputField;