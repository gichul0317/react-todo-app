import { useState } from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import ButtonModule from '../ButtonModule/ButtonModule';
import styles from './InputField.module.scss';

const Form = styled.form`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(65, 58, 58);
  margin-top: 2rem;

  & label {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    font-style: italic;
    & .invalid {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 3rem;
      font-style: italic;
      color: red;
    }
  }

  & input {
    width: 100%;
    height: 100px;
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: ${props => (props.invalid ? 'red' : 'transparent')}
    &:active, &:focus {
      background-color: purple;
    }
  }
`;

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

  const clickTest = () => {
    console.log('clicked');
  }

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={`${styles['form__label']} ${!valid && styles['form__label--invalid']}`} htmlFor="text" id="text">What is up to?</label>
        <input
          className={!valid ? `${styles['form__input--invalid']}` : `${styles['form__input']}`}
          type="text"
          id="text"
          placeholder='add your to do here'
          onChange={changeHandler}
          value={text}
        />
        {/* <button className='form__button' type='submit'>Add ToDo</button> */}
        {/* <Button onClick={clickTest} invalid={!valid}>Add ToDo</Button> */}
        <ButtonModule />
      </form>
    </>

  )
}

export default InputField;