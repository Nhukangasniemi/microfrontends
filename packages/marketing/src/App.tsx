import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';
import { MemoryHistory } from 'history';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

interface IProps {
  history: MemoryHistory;
}

const App = ({ history }: IProps) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
