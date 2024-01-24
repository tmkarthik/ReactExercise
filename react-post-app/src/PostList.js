// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, List, ListItem, ListItemText } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search by Title"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List>
        {filteredPosts.map(post => (
          <ListItem key={post.id} component={Link} to={`/post/${post.id}`}>
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PostList;
