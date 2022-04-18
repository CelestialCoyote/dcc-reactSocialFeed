import Post from './Components/Post/Post';


const DisplayPosts = (props) => {
    return ( 
        <div className="column">
            {props.parentPosts.map((post, index) => {
                return (
                    <div>
                        <Post post={post}/>
                    </div>
                );
            })}
        </div>
        
    );
}


export default DisplayPosts;
