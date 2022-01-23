import { Page } from './components/atoms/Page/Page';
import { QuoteHandler } from './containers/QuoteHandler/QuoteHandler';
import './global.scss';

function App() {
  return (
    <Page>
      <QuoteHandler />
    </Page>
  );
}

export default App;
