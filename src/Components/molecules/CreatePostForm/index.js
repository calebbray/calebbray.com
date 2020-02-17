import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!, $published: Boolean!) {
    createPost(data: { title: $title, body: $body, published: $published }) {
      id
      title
      body
      published
    }
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50rem;
`;

const StyledInput = styled.input``;


const StyledTextArea = styled.textarea``;

const CreatePostForm = () => {
  let title, body, checked;
  const [createPost] = useMutation(CREATE_POST);
  return (
    <FormWrapper>
      <StyledForm
        onSubmit={e => {
          e.preventDefault();
          const payload = {
            title: title.value,
            body: body.value,
            published: checked.checked
          };
          createPost({
            variables: payload
          }).then(data => console.log(data));
          title.value = '';
          body.value = '';
          checked.checked = false;
        }}
      >
        <StyledInput
          ref={node => {
            title = node;
          }}
          onChange={console.log(title)}
        />
        <StyledTextArea
          ref={node => {
            body = node;
          }}
        />
        <input
          type="checkbox"
          ref={node => {
            checked = node;
          }}
        />
        <button type="submit">Submit</button>
      </StyledForm>
      <StyledForm
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input type="file" accept=".md" />
        <input type="submit" value="upload file" />
      </StyledForm>
    </FormWrapper>
  );
};

export default CreatePostForm;
