import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost:null
    }
     
    componentDidMount () {

   this.loadedPost()
    }

    componentDidUpdate () {
        
    this.loadedPost()

    }
    loadedPost () {
       
        
        if(this.props.match.params.id){
             if( !this.state.loadedPost ||this.state.loadedPost && (this.state.loadedPost.id != this.props.match.params.id))
            axios.get('/posts/'+this.props.match.params.id) 
                 .then(response => {      
                    console.log(response)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    this.setState({loadedPost:response.data})
                 })

        }

    }
    deleteHandler = () =>{
        console.log('---', this.props.match.params.id)
        axios.delete('/posts/' + this.props.match.params.id)
              .then( response => {
                  console.log('.res..', response)
              }).catch(err => {
                console.log('.err..',err)
            })      
    }
    render () { 
       
        let post = <p style= {{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id) 
            {post = <p style= {{textAlign: 'center'}}>loading---</p>;}
          
        if (this.state.loadedPost) {
           
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick ={this.deleteHandler}>Delete</button>
                    </div>
                </div>    
            );
        }      
        return post;
    }
}

export default FullPost;