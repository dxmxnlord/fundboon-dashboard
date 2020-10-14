import { GraphQLClient } from 'graphql-request';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://fundboon.herokuapp.com/graphql'
    : 'http://localhost:4000/graphql';
export const WS_URL =
  process.env.NODE_ENV === 'production'
    ? 'ws://fundboon.herokuapp.com/graphql'
    : 'ws://localhost:4000/graphql';

export const useClient = () => {
  return new GraphQLClient(BASE_URL, { credentials: 'include' });
};
