import React, { useState } from 'react';


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

        <form id='create-post-form' onSubmit={handleSubmit}>

            <div className='mb-3'>
                <label for='name' className='form-label'>Name</label>
                <input id='name' className='form-control' type='text' placeholder='John Smith' value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div className="mb-3">
                <label for='post-text' className='form-label'>Post Text</label>
                <input id='post-text' className='form-control' rows='3' placeholder='What is on your mind?' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>

            <div className='justify-content-end'>
                <button id='post-submit-button' className='' type='submit'>Post</button>
            </div>
            
        </form>

    );
}
 

export default CreatePostsForm;
