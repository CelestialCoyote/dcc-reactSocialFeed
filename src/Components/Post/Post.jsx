import React, { useState } from "react";




const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisLiked] = useState(false);

    let liked = "lightgreen"
    let disliked = "red"

    function handleLikes(event) {
        setIsLiked(!isLiked);
        if(isLiked) {
            event.target.style.backgroundColor = "green";
        } else {
            event.target.style.backgroundColor = "gray";
        }
    }


    return (

        <div className='post-container'>
            <div>{props.post.name}</div>
            <div>{props.post.post}</div>
            
            {/*<button onClick = {handleLikes}>Like</button>
            <button onClick = {()=> setIsDisLiked(!isDisLiked)}>DisLike</button>*/}

            <div>
                <input type="radio" value="Like" name="likes" /> Like
                <input type="radio" value="Dislike" name="likes" /> Dislike
                <input type="radio" value="Neutral" name="likes" /> Neutral
            </div>

        </div>

    );
}


export default Post;
