import styles from './ButtonModule.module.scss';

function ButtonModule() {
  return (
    <button type='submit' className={styles.button}>
      Add ToDo
    </button>
  )
}

export default ButtonModule;