import React from 'react';

import DashBoard from './../../components/DashBoard/DashBoard';
import About from './../../components/InfoPages/About';
import UserList from './../../components/DashBoard/Users/UserList';
import UserDetails from './../../components/DashBoard/Users/UserDetails';


function Body() {
    return (
      <div className ='container-fluid'>
          <DashBoard />
          <UserList />
          <UserDetails />
          <About />
         
       
        </div>
    );
  }
  

  export default Body;