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
    axios.get('/news.json')
  .then(response => {
        const posts = response.data;
        console.log('--res saint-', posts)
        const fetchResults =[];
        for(let key in posts){
            fetchResults.unshift(
                {
                    ...response.data[key],
                    id:key
                }
            ) 
        }
        console.log(fetchResults)
        this.setState({posts:fetchResults})
       
        }
        )
        .catch(err => {
        this.setState({Error:true})
            console.log("izere",this.state.posts)
    }) 
  
}
     postSelectedHandler =(id) => {
       console.log(this.props.match.url+"/:id")
    this.setState({selectedPostId:id})
    // this.props.history.push("/"+id)
    this.props.history.push({pathname:"/posts/" +id})
}
    render () {
        let limitposts=[]

    limitposts=this.state.posts

        let posts =<p style ={{textAlign: 'center',color: 'red'}}>Something went wrong!</p>
        if(!this.state.Error)  
      
           posts =  limitposts.slice(0,7).map(post => {
            return (
            <Link to ={'/posts/'+ post.id} key = {post.id}>
                <Post  
                key = {post.id}
                name ={post.name} 
                number={post.number}
                title={post.title}
                content ={post.content}
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