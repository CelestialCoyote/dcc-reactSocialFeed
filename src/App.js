import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigatonBar';
import CreatePosts from './Components/CreatePosts/CreatePostsForm'
import './App.css';


function App() {

  const [posts, setPosts] = useState([{name: 'TIkaani Aurora', post: 'Arf, woof.'}, {name: 'Kalani Luna', post: 'Woof, grrr.'}]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid'>

      <NavigationBar />
      <CreatePosts addNewPost={addNewPost} />
      
    </div>
  );
}

export default App;
