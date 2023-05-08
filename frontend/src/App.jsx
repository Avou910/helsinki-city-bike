import { useState, useCallback, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route,
  Switch } 
from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";

import './App.css';
import Trips from './pages/Trips';
import Stations from './pages/Stations';




const queryClient = new QueryClient();



function App() {
 
  let routes;

    routes = (
      <Switch>
        <Route path="/" exact>
          <Trips />
        </Route>
        <Route path="/trips" exact>
          <Trips />
        </Route>
        <Route path="/stations" exact>
          <Stations />
        </Route>
      </Switch>
    )
    

  
  return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <main>
            {routes}
          </main>
        </Router>
      </QueryClientProvider>
    
  );
}

export default App;
