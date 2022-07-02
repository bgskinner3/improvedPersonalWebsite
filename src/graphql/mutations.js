import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createproject($input: CreateProjectInput!) {
    createproject(input: $input) {
      title
      description
      githublink
      applink
      image
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateproject($input: UpdateProjectInput!) {
    updateproject(input: $input) {
      id
      title
      description
      githublink
      applink
      image
      hidden
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($input: ID!) {
    deleteProject(id: $input) {
      id
    }
  }
`;

export const CREATE_CARD_MUTATION = gql`
  mutation createCard($input: CreateCardInput!) {
    createCard(input: $input) {
      title
      description
      field
    }
  }
`;

export const DELETE_CARD_MUTATION = gql`
  mutation deleteCard($deleteCard: ID!) {
    deleteCard(id: $deleteCard) {
      id
    }
  }
`;

export const UPDATE_CARD_MUTATION = gql`
  mutation updateCard($input: UpdateCardInput!) {
    updateCard(input: $input) {
      id
      title
      description
      field
    }
  }
`;
