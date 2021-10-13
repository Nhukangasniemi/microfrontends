import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  createMemoryHistory,
  MemoryHistory,
  Location,
  createBrowserHistory,
  History,
} from 'history';

const mount = (
  el: Element,
  navigateOptions: {
    onNavigate?: (location: Location) => void;
    defaultHistory?: History;
  }
) => {
  const history: MemoryHistory | History =
    navigateOptions.defaultHistory ?? createMemoryHistory();

  if (navigateOptions.onNavigate) {
    history.listen(navigateOptions.onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: (location: Location) => {
      if (history.location.pathname !== location.pathname) {
        history.push(location.pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
