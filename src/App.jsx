import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

const App = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  // Función para aumentar la cantidad de productos en el carrito
  const addToCart = (count) => {
    setCartItemCount(cartItemCount + count);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <CartWidget itemCount={cartItemCount} />
        <Switch>
          <Route
            path="/category/:id"
            render={(props) => (
              <ItemListContainer {...props} addToCart={addToCart} />
            )}
          />
          <Route
            path="/item/:id"
            render={(props) => (
              <ItemListContainer {...props} addToCart={addToCart} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <ItemListContainer {...props} addToCart={addToCart} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
