import React from 'react'
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Header from './Components/Header';
import ProductItem from './Components/ProductItem';

function RouteConfig() {
  return (
    <div>
     
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route   path="/about"  component={() => <h1>404 Not Found</h1>} />
          <Route   path="/contact" component={() => <h1>404 Not Found</h1>} />
          <Route  path="/product" component={Product} />
          <Route  path="/productItem/:id" component={ProductItem} />
          <Route  path="+" component={() => <h1>404 Not Found</h1>}/>

        </Switch>

      </Router>
    </div>
  )
}

export default RouteConfig
