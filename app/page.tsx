import { getPosts } from '../src/lib/wordpress';
import { WPPost } from '../src/types/wordpress';

export default async function Home() {
  let posts: WPPost[] = [];
  let error = null;

  try {
    posts = await getPosts(6);
  } catch (err) {
    error = 'Failed to load posts';
    console.error(err);
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">WordPress Posts</h1>
      
      {error && <p className="text-red-600">{error}</p>}
      
      {posts.length === 0 && !error && <p>No posts found</p>}
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-6 rounded">
            <h2 className="text-2xl font-bold mb-2" 
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>
        ))}
      </div>
    </main>
  );
}