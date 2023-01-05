import "./App.css"

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import NavBar from "./components/NavBar/";
import Cart from "./components/Cart"
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.StrictMode>
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
          </Switch>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
