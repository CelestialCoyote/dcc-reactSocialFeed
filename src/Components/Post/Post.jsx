//import React, { useState } from 'react';


const Post = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.post}</div>
            <button>Like</button>
            <button>Dislike</button>
        </div>
    );
}


export default Post;
