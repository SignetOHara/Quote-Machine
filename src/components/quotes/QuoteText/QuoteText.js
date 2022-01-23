import { FaQuoteLeft } from 'react-icons/fa';
import styles from './QuoteText.module.scss';

export const QuoteText = ({ quote }) => {
  return (
    <div className={styles.quoteText}>
      <i className={styles.icon}>
        <FaQuoteLeft />
      </i>
      <span id="text">{quote}</span>
    </div>
  );
};
