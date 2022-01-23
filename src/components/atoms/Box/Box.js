import styles from './Box.module.scss';

export const Box = ({ children, id }) => {
  return (
    <div id={id} className={styles.box}>
      {children}
    </div>
  );
};
