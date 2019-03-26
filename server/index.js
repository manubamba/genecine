// import { ApolloServer, gql } from 'apollo-server';
const {
  ApolloServer,
  gql
} = require("apollo-server");
const genericMeds = require("./genericMeds").default;
const brandedMeds = require("./brandedMeds").default;
const R = require("ramda");


// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql `
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Medicine {
    id: ID
    name: String
    unitSize: String
    mrp: String
    ingredients
    genericMed
    brandedAlternatives
    uses
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    medicines(id: ID): [Medicine]
    getMedicinesByName(name: String): [Medicine]
    medicine(id: ID!): Medicine
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    medicines: (parent, args, context, info) => {
      console.log(args);
      console.log(R.find(R.propEq("id", args.id), brandedMeds));
      return [R.find(R.propEq("id", args.id), brandedMeds)];
    },
    medicine: (_, {
      id
    }) => R.find(R.propEq("id", id), genericMeds),
    getMedicinesByName: (_, {
        name
      }) =>
      R.filter(
        R.pipe(
          R.prop("name"),
          R.toLower(),
          R.includes(R.toLower(name))
        ),
        genericMeds
      )
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});