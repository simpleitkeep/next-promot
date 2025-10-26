import { getPosts } from '../src/lib/wordpress';
import { WPPost } from '../src/types/wordpress';
import Link from 'next/link';

export default async function Home() {
  let posts: WPPost[] = [];
  let error = null;

  try {
    posts = await getPosts(10);
  } catch (err) {
    error = 'Failed to load posts from WordPress';
    console.error(err);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-white text-3xl font-bold tracking-tight">
                PROMOT
              </div>
              <span className="text-gray-500 text-sm hidden sm:block">
                | Digital Marketing Analytics
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                HOME
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                CASE STUDIES
              </Link>
              <Link href="/metrics" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                PERFORMANCE
              </Link>
              <a 
                href="https://www.promot.co.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                MAIN SITE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/10 text-sm font-mono tracking-wider">
                TECHNICAL SHOWCASE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Headless WordPress
              <span className="block text-gray-400 mt-2">Architecture Demo</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Demonstrating advanced web architecture: WordPress CMS decoupled from 
              Next.js frontend. 76% faster load times, enhanced security, infinite scalability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">76%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Faster</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">100</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Lighthouse</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">0.9s</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Load Time</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">API</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Powered</div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                NEXT.JS 14
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                WORDPRESS REST API
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                TYPESCRIPT
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                TAILWIND CSS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why Headless Architecture Matters
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 border border-gray-200">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 text-xl font-bold">
                  01
                </div>
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Static generation with Next.js delivers pages in milliseconds. 
                  No database queries on each request means instant load times.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-200">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 text-xl font-bold">
                  02
                </div>
                <h3 className="text-xl font-bold mb-4">Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  WordPress admin is completely hidden from public access. 
                  Reduced attack surface prevents 90% of common exploits.
                </p>
              </div>

              <div className="bg-white p-8 border border-gray-200">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 text-xl font-bold">
                  03
                </div>
                <h3 className="text-xl font-bold mb-4">Scalability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Handle massive traffic spikes without server crashes. 
                  Global CDN distribution ensures fast access worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Latest Articles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Content managed in WordPress, delivered through Next.js for optimal performance.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 max-w-3xl mx-auto">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-red-800 mb-1">{error}</h3>
                    <p className="text-sm text-red-700">
                      Verify WordPress REST API is accessible and CORS headers are configured.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!error && posts.length === 0 && (
              <div className="text-center py-16 bg-gray-50 border-2 border-dashed border-gray-300">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-xl text-gray-600 font-medium">No posts found</p>
                <p className="text-gray-500 mt-2">Create some posts in WordPress to see them here.</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-white border border-gray-200 hover:border-black transition-all duration-300"
                >
                  {post._embedded?.['wp:featuredmedia']?.[0] && (
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <img
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-4 uppercase tracking-wider">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                      {post._embedded?.author?.[0] && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{post._embedded.author[0].name}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 
                      className="text-xl font-bold mb-3 group-hover:underline"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    
                    <div 
                      className="text-gray-600 mb-6 line-clamp-3 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold uppercase tracking-wider hover:underline"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for Modern Web Architecture?
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              See how headless WordPress can transform your digital presence 
              with performance, security, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/metrics"
                className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                View Performance Metrics
              </Link>
              <a 
                href="https://www.promot.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 font-bold uppercase tracking-wide hover:bg-white/20 transition-colors"
              >
                Visit Main Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-8">
              <div>
                <div className="text-white text-2xl font-bold mb-4">PROMOT</div>
                <p className="text-sm leading-relaxed">
                  Digital Marketing Analytics platform showcasing advanced web architecture 
                  and performance optimization techniques.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
                  Technology
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>Next.js 14 App Router</li>
                  <li>WordPress REST API</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vercel Deployment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
                  Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.promot.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Main Website
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/simpleitkeep/next-promot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <Link href="/metrics" className="hover:text-white transition-colors">
                      Performance Metrics
                    </Link>
                  </li>
                  <li>
                    <a href="https://linktr.ee/Promot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Social Media
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
              <p>
                © 2024 Promot Technologies. A division of S.K.A.T. (S.K. Agri-Tech Pvt. Ltd.)
              </p>
              <p className="mt-4 md:mt-0">
                Part of <span className="text-white font-semibold">365-Day Tech Mastery Challenge</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}