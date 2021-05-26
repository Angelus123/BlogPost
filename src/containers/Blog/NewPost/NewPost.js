import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from 'axios'
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted:false,
        loading:false
    }
    componentDidMount () {
        //if unauth => this.props.history.replace('/posts')
        // console.log(this.props)
    }
    postDataHandler = () => {
        this.setState({loading:true})
        const data = {
            title:this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        axios.post('/news.json', data)
            .then(response =>{

               this.props.history.push('/posts')
                // this.setState({submitted: true})
                // console.log(this.state.submitted)
           
            }).catch(err => {
                console.log(err)
                alert(err)
                     this.setState({loading:true})
            })
    }
    

    render () {
        let loading= null;
        if (this.state.loading)
        loading= <Spinner />
        // let redirect =null ;
        // if(this.state.submitted){
        //     redirect =<Redirect to ="/posts" />
        // }
        
        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Felix</option>
                    <option value="Manu">Dyd</option>
                     <option value="Manu">Olivier</option>
                </select>
                {loading}
                <button onClick ={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;