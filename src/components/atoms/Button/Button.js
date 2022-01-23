import styles from './Button.module.scss';

export const Button = ({ clickHandler, id, text }) => {
  return (
    <button className={styles.button} id={id} onClick={clickHandler}>
      {text}
    </button>
  );
};
