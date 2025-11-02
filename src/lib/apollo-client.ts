import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
function createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://skagtech.com/graphql',
            credentials: 'same-origin',
        }),
        cache: new InMemoryCache(),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'network-only',
            },
            query: {
                fetchPolicy: 'network-only',
            },
        },
    });
}

export default createApolloClient;