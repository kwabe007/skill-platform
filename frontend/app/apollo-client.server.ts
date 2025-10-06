import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { buildUrl } from "~/utils";
import invariant from "tiny-invariant";
import { SetContextLink } from "@apollo/client/link/context";

invariant(
  process.env.PAYLOAD_BASE_URL,
  "PAYLOAD_BASE_URL environment variable must be set",
);

const authLink = new SetContextLink((prevContext, operation) => {
  const { headers } = prevContext || {};

  return {
    headers,
  };
});

const httpLink = new HttpLink({
  uri: buildUrl(process.env.PAYLOAD_BASE_URL, "/api/graphql"),
});

const defaultOptions: any =
  process.env.NODE_ENV !== "production"
    ? {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      }
    : undefined;

export const apollo = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions,
});
