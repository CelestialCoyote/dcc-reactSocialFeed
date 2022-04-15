import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigatonBar';
import CreatePosts from './Components/CreatePosts/CreatePostsForm'
import './App.css';


function App() {
  return (
    <div className='container-fluid'>

      <NavigationBar />
      <CreatePosts />
      
    </div>
  );
}

export default App;
