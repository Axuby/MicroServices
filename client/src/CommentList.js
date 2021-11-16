import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.production.min';


function CommentList({postId}) {
    const [comments,setComments] = useState({});
    
    const fetchComments = async ()=>{
       const res = await  axios.get(`https://localhost:4001/posts${postId}/comments`)
         setComments(res.data)
    }

    useEffect(()=>{
        fetchComments()
    },[])
       return (
        <div>
            <p>{comments}</p>
        </div>
    )
}

export default CommentList
