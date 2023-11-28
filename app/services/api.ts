import { ApolloClient, InMemoryCache } from "@apollo/client";

// Create an instance of ApolloClient for making GraphQL queries
const client = new ApolloClient({
  uri: "https://api.tigerhall.net/v2/",
  cache: new InMemoryCache(),
});

export default client;
