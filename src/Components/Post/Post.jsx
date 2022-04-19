import React, { useEffect, useState } from "react";


const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisLiked] = useState(false);

    const handleLikes = (event) => {
        setIsLiked(!isLiked);
        if(isLiked) {
            event.target.style.backgroundColor = "green";
        } else {
            event.target.style.backgroundColor = "gray";
        }
    }

    const handleDisLikes = (event) => {
        setIsDisLiked(!isDisLiked);
        if(isDisLiked) {
            event.target.style.backgroundColor = "red";
        } else {
            event.target.style.backgroundColor = "gray";
        }
    }

    useEffect(() => {
        if(isLiked) {
            
        }
    });

    return (

        <div className='post-container'>
            <div style={{ display: 'flex' }}>
                <div  style={{ color: 'gold', margin: '1.0em', padding: '0.5em' }}>{props.post.name}</div>
                <div style={{ border: '1px solid black', color: 'white', margin: '1.0em', padding: '0.5em'}}>{props.post.post}</div>
            </div>
            
            
            <button id='like-button' className='like-button' onClick = {handleLikes}>Like</button>
            <button id='dislike-button' className='like-button' onClick = {handleDisLikes}>DisLike</button>
        </div>

    );
}


export default Post;
