import React,{useEffect, useState} from 'react'
import axios from 'axios'
function PostList() {
    const [post, setPosts] = useState({})
    const fetch = async ()=> {
       const res = await axios.get('localhost:4000')
    setPosts(res.data)
    }
    
    return (
        <div>
           {post.title}
        </div>
    )
}

export default PostList
