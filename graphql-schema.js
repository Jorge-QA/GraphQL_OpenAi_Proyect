const { buildSchema } = require('graphql');
exports.graphQLschema = buildSchema(`
  type Query {
    
    hello: String
    version: String
  }`);