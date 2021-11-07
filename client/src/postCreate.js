import React from 'react'

function postCreate() {

    const onSubmit = ()=> {


    }


    return (
        <div>
            <form >
            <div className='form-group'>
               <labe>Title</labe>
               <input className='form-control'/>
            </div>

            <button className='btn btn-primary' onSubmit={onSubmit}> Submit</button>
            </form>
        </div>
    )
}

export default postCreate
