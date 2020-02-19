import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Corn from './Corn';
import Boba from './Boba';
import FreshTako from './FreshTako';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact activeClassName='active-link' to='/'>Vending Machine</NavLink>
        <NavLink exact activeClassName='active-link' to='/corn'>Corn</NavLink>
        <NavLink exact activeClassName='active-link' to='/boba'>Boba</NavLink>
        <NavLink exact activeClassName='active-link' to='/freshtako'>Fresh Tako</NavLink>
      </nav>
 
      <Switch>
          <Route exact path='/' component={VendingMachine} />
          <Route exact path='/corn' component={Corn} />
          <Route exact path='/boba' component={Boba} />
          <Route exact path='/freshtako' component={FreshTako} />
      </Switch>      
    </div>
  );
}

export default App;
