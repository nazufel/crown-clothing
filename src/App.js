import React from 'react';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// stubbinging in dummy pages
const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
)

const SneakersPage = () => (
  <div>
    <h1> SNEAKERS PAGE </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/hats' component={ HatsPage }/>
        <Route exact path='/shop' component={ ShopPage }/>
        <Route exact path='/sneakers' component={ SneakersPage }/>
      </Switch>
    </div>
  );
}

export default App;
