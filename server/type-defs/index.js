const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload
  type File {
    url: String!
  }
  type User {
    id: ID!
    username: String!
    password: String
  }
  type Cards {
    id: ID
    title: String
    description: String
    field: String
  }
  type Projects {
    id: ID
    title: String
    description: String
    githublink: String
    applink: String
    image: String
    hidden: Boolean
  }
  type Query {
    user(token: String!): User!
    cards: [Cards!]!
    card(id: ID!): Cards
    project(id: ID!): Projects
    projects: [Projects!]!
  }
  input UserInput {
    username: String!
    password: String!
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  input CreateCardInput {
    title: String
    description: String
    field: String
  }
  input UpdateCardInput {
    id: ID!
    title: String
    description: String
    field: String
  }
  input CreateProjectInput {
    title: String
    description: String
    githublink: String
    applink: String
    image: String
  }
  input UpdateProjectInput {
    id: ID!
    title: String
    description: String
    githublink: String
    applink: String
    image: String
    hidden: Boolean
  }
  type Mutation {
    createCard(input: CreateCardInput!): Cards
    updateCard(input: UpdateCardInput): Cards!
    deleteCard(id: ID!): Cards
    createproject(input: CreateProjectInput!): Projects
    updateproject(input: UpdateProjectInput): Projects!
    deleteProject(id: ID!): Projects
    login(username: String!, password: String!): AuthPayload!
    uploadFile(file: Upload!): File!
  }
`;
module.exports = { typeDefs };
