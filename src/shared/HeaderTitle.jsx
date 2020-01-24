import React from 'react';
import Header from './Layout/Header';



function HeaderTitle(props) {
    return (
      <div>
         
         <h1 className="display-4">{props.title}</h1>
          <p className='lead' >{props.tagLine}</p>

        </div>
    );
  }
  

  export default HeaderTitle;