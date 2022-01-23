import styles from './Page.module.scss';

export const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
