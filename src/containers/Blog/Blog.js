import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';
import Layout from '../../hoc/Layout/Layout';

class Blog extends Component {
    state
     = {
        posts:[],
        selectedPostId:null,
        Error:false
    }
    componentDidMount() {
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatePosts = posts.map(post => {
                return{
                    ...post,
                    author:'Max'
                } 

            })
            this.setState({posts:updatePosts})
                console.log(updatePosts)
            })
            .catch(err => {
           
             this.setState({Error:true})

            })
        
    }
    postSelectedHandler =(id) => {
        this.setState({selectedPostId:id})
    }
 
    render () {
        let posts =<p style ={{textAlign: 'center',color: 'red'}}>Something went wrong!</p>
    if(!this.state.Error)  
         posts = this.state.posts.map(post => {
            return <Post 
            key ={post.id}
            title ={post.title} 
            author ={post.author}
            clicked ={() =>this.postSelectedHandler(post.id)}/>
        }
        )
   
        return (
            <Layout>
            <div>
                <section className="Posts">
                  {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
            </Layout>
        );
    }
}

export default Blog;