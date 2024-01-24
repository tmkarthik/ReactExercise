// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import PostDetails from './PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/post/:postId" component={PostDetails} />
      </Switch>
    </Router>
  );
}

export default App;
