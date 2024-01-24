// src/components/PostDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [postId]);

  if (!post) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
      <Typography variant="subtitle1">User ID: {post.userId}</Typography>
    </div>
  );
};

export default PostDetails;
