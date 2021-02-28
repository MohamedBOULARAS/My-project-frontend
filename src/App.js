
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Tarifs from './components/pages/Tarifs';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Entreprise from './components/pages/Entreprise';
import User from './components/pages/User';
import Client from './components/pages/Client';
import Fournisseur from './components/pages/Fournisseur';
import Produit from './components/pages/Produit';




function App() {
    return (
        <>
          <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Tarifs' exact component={Tarifs} />
            <Route path='/Contact' exact component={Contact} />
            <Route path='/sign-up' exact component={Login} />
            <Route path='/entreprise' exact component={Entreprise} />
            <Route path='/user' exact component={User} />
            <Route path='/client' exact component={Client} />
            <Route path='/fournisseur' exact component={Fournisseur} />
            <Route path='/produit' exact component={Produit} />
          </Switch>
          </Router>
        </>
      );

}

export default App;


