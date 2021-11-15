import React from 'react';
import axios from 'axios';

function CommentCreate({postId}) {
    return (
        <div>
            <form onSubmit={}>
                <div className="form-group">
                <label> Enter Comment</label>
                <input className="form-control" type='text' />
                </div>
                <button className="btn btn-primary"> Submit Comment</button>
            </form>
        </div>
    )
}

export default CommentCreate
