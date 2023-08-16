const { buildSchema } = require('graphql');
exports.graphQLschema = buildSchema(`
  type Query {
    userPrompt(user: String!): [Prompt]
    ByName(user: String!, name: String!): [Prompt]
    ByTags(user: String!, tags: [String]!): [Prompt]
    prompts: [Prompt]
  }
  
  type Prompt {
    _id: ID!,
    name: String!,
    type: String!,
    tags: [String],
    input: String!,
    n: String,
    size: String,
    user: String!,
    response: [String]
  }`);