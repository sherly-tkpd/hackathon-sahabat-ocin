import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ROUTES from './constants/routes';

/* LIST OF ROUTE COMPONENTS */
import Home from './routes/Home';
import ProductDetail from './routes/ProductDetail';
import ProductList from './routes/ProductList';
import WebXR from './routes/WebXR';

const App = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.PRODUCT_WEBXR} component={WebXR} />
      <Route path={ROUTES.PRODUCT_DETAIL} component={ProductDetail} />
      <Route path={ROUTES.PRODUCT_LIST} component={ProductList} />
      <Route path={ROUTES.HOME} component={Home} />
    </Switch>
  </Router>
);

export default App;
