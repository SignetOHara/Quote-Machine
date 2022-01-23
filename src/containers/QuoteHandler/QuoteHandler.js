import { useState, useEffect, useCallback } from 'react';
import { Quotes } from '../Quotes/Quotes';
import { Spinner } from '../../components/atoms/Spinner/Spinner';
import { Error } from '../../components/atoms/Error/Error';
import { useDataApi } from '../../data/hooks/useDataApi';

export const QuoteHandler = () => {
  const [{ status, error, data }] = useDataApi(
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  );

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isFading, setIsFading] = useState(false);

  const getQuote = useCallback(() => {
    const getRandomQuote = () => {
      const { quote, author } =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setQuote(quote);
      setAuthor(author);
    };
    getRandomQuote();
  }, [data.quotes]);

  const clickHandler = () => {
    setIsFading(true);
    setTimeout(() => {
      getQuote();
      setIsFading(false);
    }, 1000);
  };

  useEffect(() => {
    if (data.quotes) {
      getQuote();
    }
  }, [data.quotes, getQuote]);

  if (status === 'fetching') return <Spinner />;
  if (status === 'error') return <Error error={error} />;

  return (
    <Quotes
      quote={quote}
      author={author}
      clickHandler={clickHandler}
      isFading={isFading}
    />
  );
};
