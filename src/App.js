import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigatonBar';
import CreatePosts from './Components/CreatePosts/CreatePostsForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{name: 'TIkaani Aurora', post: 'Arf, woof.'}, {name: 'Kalani Luna', post: 'Woof, grrr.'}]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (

    <div id='main-container' className='container-fluid'>

      <NavigationBar />

      <div id='posts-container' className='col-9'>

        <div className='border-box'>
          <CreatePosts addNewPost={addNewPost} />
        </div>

        <div>
          <DisplayPosts parentPosts={posts} />
        </div>

      </div>
      
    </div>
  );
}


export default App;