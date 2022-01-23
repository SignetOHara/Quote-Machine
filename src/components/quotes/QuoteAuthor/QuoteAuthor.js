import styles from './QuoteAuthor.module.scss';

export const QuoteAuthor = ({ author }) => {
  return (
    <div className={styles.quoteAuthor}>
      <span id="author">{`- ${author}`}</span>
    </div>
  );
};
