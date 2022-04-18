import React from 'react';


const Post = (props) => {
    return (
        <div>
            <div>{props.post.name}</div>
            <div>{props.post.post}</div>
            <button>Like</button>
            <button>Dislike</button>
        </div>
    );
}


export default Post;
