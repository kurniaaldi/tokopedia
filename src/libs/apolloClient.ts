import { ApolloClient, from, InMemoryCache, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import env from "./env";

const REACT_APP_BASE_URL = env.REACT_APP_BASE_URL;

const httpLink = new HttpLink({
  uri: REACT_APP_BASE_URL,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function createApolloClient() {
  return new ApolloClient({
    link: from([httpLink, errorLink]),
    cache: new InMemoryCache(),
  });
}

export function useApollo() {
  const store = createApolloClient();
  return store;
}
