import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";

const AppRoute = () => {
   return (
      <Switch>
         <Route exact path='/'>
            <Redirect to='/home' />
         </Route>
         <Route path='/home'>
            <Home />
         </Route>
         <Route path='/cart'>
            <Cart />
         </Route>
      </Switch>
   )
}

export default AppRoute
