import './DisplayPosts.css';


const DisplayPosts = (props) => {
    return ( 
        <div className="column">
            {props.parentPosts.map((post, index) => {
                    return (
                        <div className="post-container"  key={index}>
                            <div>{post.name}</div>
                            <div>{post.post}</div>
                        </div>
                    );
                })}

        </div>
    );
}
 
export default DisplayPosts;