import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    projects {
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

export const GET_ALL_CARDS = gql`
  query getAllCards {
    cards {
      id
      title
      description
      field
    }
  }
`;

export const GET_SINGLE_CARD = gql`
  query card($id: ID!) {
    card(id: $id) {
      id
      title
      description
      field
    }
  }
`;