import React, { useState } from 'react';
import './CreatePostsForm.css';



const CreatePostsForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewEntry(newPost);
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>

            <div className='form-group'>

                <label>Name</label>
                <input className='form-control' type='text' value={name} onChange={(event) => setName(parseFloat(event.target.value))} />

            </div>

            <div className='form-group'>

                <label>Post</label>
                <input className='form-control' type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
                
            </div>
            
            
            <button className='btn btn-primary' type='submit' style={{'margin-top' : '1.0em'}}>Post</button>

        </form>
    );
}
 

export default CreatePostsForm;