import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';

const headers = { 'content-type': 'application/json' };
const getHeaders = () => {
  return headers;
};

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnect: true,
    lazy: true
  },
  connectionParams: () => {
    return { headers: getHeaders() };
  }
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  headers: getHeaders()
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link,
  cache
});
