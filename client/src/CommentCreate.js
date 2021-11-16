import React,{useState} from 'react';
import axios from 'axios';

function CommentCreate({postId}) {
    const [comment,setComment] = useState('')

    const onSubmit =  async (event)=>{
        event.preventDefault();
        await axios.post(`/posts/${postId}/comments`,{
            comment
        })
        setComment('')
    
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <label> Enter Comment</label>
                <input  value={comment} onChange={e => setComment(e.target.value)} className="form-control" type='text' />
                </div>
                <button className="btn btn-primary"> Submit Comment</button>
            </form>
        </div>
    )
}

export default CommentCreate
