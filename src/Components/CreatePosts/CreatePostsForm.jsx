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
        props.addNewPost(newPost);
    }

    return (
        <form id='create-post-container' className='container' onSubmit={handleSubmit}>

            <div className='column'>

                <div className='row'>

                    <div className='create-post-entry'>

                        <label className='create-post-label'>Name</label>
                        <input className='' type='text' value={name} onChange={(event) => setName(event.target.value)} />

                    </div>

                    <div className='create-post-entry'>

                        <label className='create-post-label'>Post</label>
                        <input className='' type='text' value={post} onChange={(event) => setPost(event.target.value)}/>

                    </div>

                </div>

                <div>

                    <button id='submit-button' className='' type='submit' style={{'marginTop' : '1.0em'}}>Post</button>

                </div>

            </div>

        </form>
    );
}
 

export default CreatePostsForm;