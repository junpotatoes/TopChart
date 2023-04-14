import ReactDOM from 'react-dom';
import CreateDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;
const root = CreateDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
