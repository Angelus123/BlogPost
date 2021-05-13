import React, {Component} from 'react'
import axios from '../../../axios';
import {Route, Link} from 'react-router-dom'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'
class Posts extends Component {
    state= {
       posts:[]
      
   }
    
   componentDidMount() {
       console.log("pppppppp",this.props)
    axios.get('/posts')
    .then(response => {
    console.log('response',response)
        const posts =response.data.slice(0, 4);
        const updatePosts = posts.map(post => {
            return{
                ...post,
                author:'Max'
            } 

        })
        this.setState({posts:updatePosts})
            console.log('uuu',updatePosts)
        })
        .catch(err => {
         console.log(err)
        // this.setState({Error:true})

        })
    
}
   postSelectedHandler =(id) => {
       console.log(this.props.match.url+"/:id")
    this.setState({selectedPostId:id})
    // this.props.history.push("/"+id)
    this.props.history.push({pathname:"/posts/" +id})
}
    render () {

        let posts =<p style ={{textAlign: 'center',color: 'red'}}>Something went wrong!</p>
        if(!this.state.Error)  
         posts = this.state.posts.map(post => {
            return (
            <Link to ={'/posts/'+ post.id} key = {post.id}>
                <Post  key = {post.id}
            title ={post.title} 
            author ={post.author}
            clicked ={() =>this.postSelectedHandler(post.id)}/>  
         </Link> 
          )
        }
        )

        return ( 
        <div>
             <section className="Posts">
                {posts}
            </section>
            
            <Route path ={this.props.match.url +"/:id"} exact component ={FullPost} />
        </div>
           )

    }
}
export default Posts