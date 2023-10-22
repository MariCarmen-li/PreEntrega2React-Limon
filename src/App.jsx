import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemListContainer} />
          <Route path="/" component={ItemListContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
