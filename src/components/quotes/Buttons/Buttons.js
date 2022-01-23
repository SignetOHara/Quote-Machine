import { FaTwitter } from 'react-icons/fa';
import { Button } from '../../atoms/Button/Button';
import styles from './Buttons.module.scss';

export const Buttons = ({ quote, author, clickHandler }) => {
  return (
    <div className={styles.buttons}>
      <a
        className={styles.twitter}
        title="Tweet this quote!"
        target="_blank"
        id="tweet-quote"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
      >
        <i>
          <FaTwitter />
        </i>
      </a>
      <Button clickHandler={clickHandler} id="new-quote" text="New quote" />
    </div>
  );
};
