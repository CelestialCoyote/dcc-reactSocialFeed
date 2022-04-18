import React from 'react';
import Post from '../Post/Post';


const DisplayPosts = (props) => {
    return (

        <div>
            {props.parentPosts.map((post, index) => {
                return (
                    <div key={index}>
                        <Post post={post}/>
                    </div>
                );
            })}
        </div>

    );
}


export default DisplayPosts;
