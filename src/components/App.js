import React from 'react'
import {
  BrowserRouter as
  Router,
  Route,
  Switch
} from "react-router-dom";
import { Header } from './Header';
import { Home } from './Home';
import  Weather  from './Weather';
 const App = () => {
  return (
    <Router><div className='container-fluid p-0'>
    <Header/>
    <Switch>
     
    <Route path='/weather'><Weather/></Route>
    <Route path='/'><Home/></Route>
    </Switch>
    
   </div></Router>
   
  )
}

export default App;