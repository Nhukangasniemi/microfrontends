import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, MemoryHistory, Location } from 'history';

const mount = (
  el: Element,
  navigateOptions?: {
    onNavigate: (location: Location) => void;
  }
) => {
  const history: MemoryHistory = createMemoryHistory();

  if (navigateOptions) {
    history.listen(navigateOptions.onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
