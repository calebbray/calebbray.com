import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Posts from '../../molecules/Posts';

const StyledHeader = styled.h2``;

function PostsPage() {
  return (
    <>
      <StyledHeader>Check out some of the Books I've been reading</StyledHeader>
      <Posts />
      <Link to="/posts/create">Add a new Post</Link>
    </>
  );
}

export default PostsPage;
