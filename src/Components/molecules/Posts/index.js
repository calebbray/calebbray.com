import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Markdown from 'markdown-to-jsx';

import Loader from 'Components/atoms/Loader';

const GET_ALL_POSTS = gql`
  query {
    posts {
      id
      title
      body
      published
    }
  }
`;

const Posts = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  if (loading) return <Loader loaderSize={5} />;
  if (error) return <>Error</>;
  return data.posts.map(post => {
    return (
      post.published && (
        <div key={post.id}>
          <div>{post.title}</div>
          <br />
          <Markdown>{post.body}</Markdown>
          <br />
        </div>
      )
    );
  });
};

export default Posts;
