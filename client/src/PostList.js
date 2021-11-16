import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'


function PostList() {
    const [posts, setPosts] = useState({})

    const fetchPosts = async ()=> {
       const response = await axios.get('hhtps://localhost:4000/posts')

    setPosts(response.data)
    }
    
    useEffect(()=>{
        fetchPosts();
    },[])

    const renderedPosts = Object.values(posts).map(post => { 
        return ( 
       <div
       className="card"
       style={{width:'30%',marginBottom:'20px'}}
       key={post.id}
       > 
       <div className="card-body">
           <h3>{post.title}</h3>
           <CommentCreate  postId={post.id}/>
           <CommentList/>
            </div> 
        </div>
        )
        })

        return(
            <div
            className="d-flex "
            >
                {renderedPosts}
            </div>
        )
    }
export default PostList
