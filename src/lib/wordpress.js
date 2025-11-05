import { GraphQLClient } from 'graphql-request';

   const client = new GraphQLClient(process.env.WORDPRESS_GRAPHQL_URL);

   export async function getPostBySlug(slug) {
     const query = `
       query GetPost($slug: ID!) {
         post(id: $slug, idType: SLUG) {
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
     `;
     
     const variables = { slug };
     const data = await client.request(query, variables);
     return data.post;
   }