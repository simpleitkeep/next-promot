import { getPostBySlug } from '@/lib/wordpress';
   import TechVisionComponent from '@/components/TechVision';

   export async function generateMetadata() {
     const post = await getPostBySlug('tech-vision');
     
     return {
       title: post?.seo?.title || post?.title || 'Tech Vision - Promot Technologies',
       description: post?.seo?.metaDesc || post?.excerpt || 'Decoupled Digital Stack Vision',
     };
   }

   export default async function TechVisionPage() {
     const post = await getPostBySlug('tech-vision');
     
     return (
       <div>
         <TechVisionComponent />
       </div>
     );
   }