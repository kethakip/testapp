import React from 'react';
import {BrowserRouter,Route,Switch}   from 'react-router-dom';

import DashBoard from './../../components/DashBoard/DashBoard';
import About from './../../components/InfoPages/About';
import UserList from './../../components/DashBoard/Users/UserList';
import UserDetails from './../../components/DashBoard/Users/UserDetails';


function Body() {
    return (
      <div className ='container-fluid'>
        <Switch>
            <Route path="/users/:id" component={ UserDetails } />
            <Route path="/users" component={ UserList } /> 
            <Route path="/About"  component={ About } />  
            <Route exact path="/"   component={ DashBoard } />  

                
         
     
         </Switch>
       
        </div>
    );
  }
  

  export default Body;