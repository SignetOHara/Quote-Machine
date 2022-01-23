import { Box } from '../../components/atoms/Box/Box';
import { QuoteText } from '../../components/quotes/QuoteText/QuoteText';
import { QuoteAuthor } from '../../components/quotes/QuoteAuthor/QuoteAuthor';
import { Fader } from '../../components/atoms/Fader/Fader';
import { Buttons } from '../../components/quotes/Buttons/Buttons';

export const Quotes = ({ quote, author, clickHandler, isFading }) => {
  return (
    <Box id="quote-box">
      <Fader isFading={isFading}>
        <QuoteText quote={quote} />
        <QuoteAuthor author={author} />
      </Fader>
      <Buttons quote={quote} author={author} clickHandler={clickHandler} />
    </Box>
  );
};
