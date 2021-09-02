import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

const httpOptions = { uri: "/graphql" };

const uploadLink = createUploadLink(httpOptions);

const batchHttpLink = new BatchHttpLink(httpOptions);

const httpLink = new HttpLink(httpOptions);

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const apolloClient = new ApolloClient({
	credentials: "include",
	link: from([errorLink, uploadLink, batchHttpLink, httpLink]),
	cache: new InMemoryCache(),
});

export default apolloClient;
