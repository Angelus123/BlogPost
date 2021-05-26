import React from 'react';

import './Post.css';

const post = (props) =>{
  return  <React.Fragment> <div className="Post" onClick ={props.clicked}>
  
      <h1> {props.title}</h1> 
         {props.author}
 
    </div>
    </React.Fragment>
};

export default post;