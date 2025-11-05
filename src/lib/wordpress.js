import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.WORDPRESS_GRAPHQL_URL || 'https://promot.skagtech.com/graphql');

export async function getPostBySlug(slug) {
  try {
    const query = `
      query GetPostBySlug($slug: String!) {
        posts(where: {name: $slug}) {
          nodes {
            title
            excerpt
            content
            slug
            seo {
              metaDesc
              title
            }
          }
        }
      }
    `;
    
    const variables = { slug };
    const data = await client.request(query, variables);
    return data.posts.nodes[0]; // Return first result
  } catch (error) {
    console.error('WordPress GraphQL Error:', error);
    return null;
  }
}