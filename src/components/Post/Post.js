import React from 'react';

import './Post.css';

const post = (props) =>{
    const MAX_LENGTH = 40;
    const { title } = props;
  return   <article className="Post" onClick ={props.clicked}>
         
        <h1 >{title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
};

export default post;