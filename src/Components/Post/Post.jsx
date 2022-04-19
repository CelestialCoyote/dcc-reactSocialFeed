import React, { useState } from "react";


const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisLiked] = useState(false);

    function handleLikes(event) {
        setIsLiked(!isLiked);
        if(isLiked) {
            event.target.style.backgroundColor = "green";
        } else {
            event.target.style.backgroundColor = "gray";
        }
    }

    function handleDisLikes(event) {
        setIsLiked(!isLiked);
        if(isLiked) {
            event.target.style.backgroundColor = "red";
        } else {
            event.target.style.backgroundColor = "gray";
        }
    }

    return (

        <div className='post-container'>
            <div>{props.post.name}</div>
            <div>{props.post.post}</div>
            
            <button className='like-button' onClick = {handleLikes}>Like</button>
            <button className='like-button' onClick = {handleDisLikes}>DisLike</button>
        </div>

    );
}


export default Post;
