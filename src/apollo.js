import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "apollo-utilities";

const headers = {
  'content-type': 'application/json',
  "authorization": "Bearer "
};
const getHeaders = () => {
  return headers;
};

const cache = new InMemoryCache();


const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
  headers: getHeaders()
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  httpLink
);

export const client = new ApolloClient({
  link,
  cache
});

