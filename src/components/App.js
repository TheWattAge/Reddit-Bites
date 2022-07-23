import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './homepage/Home';
import Subreddit from './subreddit/Subreddit';
import Post from './post/Post';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/r/:subreddit" element={<Subreddit />}/>
        <Route path="/post/:id" element={<Post />}/>
      </Routes>
    </Router>
  );
}

export default App;
