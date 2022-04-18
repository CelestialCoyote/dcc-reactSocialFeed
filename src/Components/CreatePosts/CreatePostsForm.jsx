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

        <form onSubmit={handleSubmit}>

            <label className='create-post-label'>Name</label>
            <input className='' type='text' value={name} onChange={(event) => setName(event.target.value)} /><br></br>

            <label className='create-post-label'>Post</label>
            <input className='' type='text' value={post} onChange={(event) => setPost(event.target.value)}/>

            <button id='submit-button' className='' type='submit' style={{'marginTop' : '1.0em'}}>Post</button>

        </form>

    );
}
 

export default CreatePostsForm;
