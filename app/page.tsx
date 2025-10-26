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
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-white text-3xl font-bold tracking-tight">
                PROMOT
              </div>
              <span className="text-gray-500 text-sm hidden sm:block">
                | AI-Powered Digital Marketing
              </span>
            </Link>
            
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

            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 
        HERO SECTION - Edit headlines and stats here
        Update numbers based on your actual client results
      */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/10 text-sm font-mono tracking-wider">
                AI + ML + DATA ANALYTICS
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Digital Marketing That
              <span className="block text-gray-400 mt-2">Actually Makes Money</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              We don't just run ads. We deploy <span className="text-white font-semibold">machine learning models</span> for 
              lead scoring, <span className="text-white font-semibold">predictive analytics</span> for budget optimization, 
              and <span className="text-white font-semibold">automated workflows</span> that run 24/7. 
              Our clients see <span className="text-white font-semibold">3-5x ROI improvements</span> in 90 days.
            </p>

            {/* 
              ROI STATS - Update these with your real client data
              These are placeholders based on your strategic goals
            */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">3-5x</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">ROI Increase</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">82%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Cost Reduction</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Automation</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="text-4xl font-bold mb-2">90d</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">To Results</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                MACHINE LEARNING
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                PREDICTIVE ANALYTICS
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                HEADLESS WORDPRESS
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs font-mono">
                AUTOMATED WORKFLOWS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        HEADLESS WORDPRESS HARD SELL
        This is your technical showcase - keep it detailed!
      */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-800 md:text-5xl font-bold mb-6">
                Why Headless WordPress Architecture?  
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Traditional WordPress is slow, insecure, and can't handle traffic spikes. 
                We decoupled the CMS from the frontend using <span className="font-bold">REST API integration</span> and 
                <span className="font-bold"> Next.js static site generation</span>. Result? 76% faster, 90% more secure, infinitely scalable.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 border-2 border-black">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 text-xl font-bold">
                  01
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Performance = Revenue</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every 1 second delay = 7% conversion loss. Our headless architecture loads in 
                  <span className="font-bold"> 0.9 seconds vs 3.8 seconds</span> for traditional WordPress.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Static Site Generation (SSG) via Next.js</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Edge CDN distribution globally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Zero database queries per page load</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Lighthouse score: 98-100/100</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 border-2 border-black">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 text-xl font-bold">
                  02
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Fort Knox Security</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  WordPress powers 43% of websites—and is the <span className="font-bold">#1 hacking target</span>. 
                  By hiding the CMS layer and serving static files, we eliminate 90% of attack vectors.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>WordPress admin completely hidden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>No PHP execution on frontend</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>API authentication layer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Automatic DDoS protection via Vercel</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 border-2 border-black">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 text-xl font-bold">
                  03
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 ">Handle Viral Traffic</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Traditional WordPress crashes at 10,000 concurrent users. Our headless setup 
                  handles <span className="font-bold">millions</span> without breaking a sweat—or your budget.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Auto-scaling infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>99.99% uptime SLA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Pay-per-use pricing model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">▪</span>
                    <span>Global edge network (190+ locations)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Architecture Diagram - Visual explanation */}
            <div className="bg-black text-white p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">The Architecture</h3>
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="bg-white/10 border border-white/20 p-6 mb-4">
                    <div className="text-4xl mb-2">📝</div>
                    <div className="font-bold">WordPress CMS</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Content management only<br/>
                    Hidden from public<br/>
                    Secure backend
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="font-mono text-sm">REST API</div>
                  <div className="text-xs text-gray-400 mt-2">
                    JSON data transfer<br/>
                    Cached responses<br/>
                    Authentication layer
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 border border-white/20 p-6 mb-4">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="font-bold">Next.js Frontend</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Lightning-fast UI<br/>
                    Static generation<br/>
                    Global CDN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        AI/ML/DATA ANALYTICS SECTION
        Highlight your competitive advantage
        Edit ROI numbers based on real client results
      */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Data Science Meets Digital Marketing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most agencies run ads and hope for the best. We use <span className="font-bold">machine learning models</span>, 
                <span className="font-bold"> predictive analytics</span>, and <span className="font-bold">automated optimization</span> to 
                guarantee 3-5x ROI improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-50 p-10 border-l-4 border-black">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">🤖 Machine Learning Lead Scoring</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our ML model analyzes 50+ data points to predict which leads will convert. 
                  Result: Sales team focuses on high-probability prospects, closing rate increases 3x.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Traditional approach:</span>
                    <span className="font-bold text-gray-900">8% close rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">With ML scoring:</span>
                    <span className="font-bold text-green-600">24% close rate</span>
                  </div>
                  <div className="flex justify-between border-t pt-3 mt-3">
                    <span className="font-bold text-gray-900">Improvement:</span>
                    <span className="font-bold text-green-600">↑ 200%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-10 border-l-4 border-black">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">📊 Predictive Budget Allocation</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Instead of guessing, our algorithm predicts which channels will deliver ROI and 
                  automatically shifts budget in real-time. No manual intervention needed.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Manual optimization:</span>
                    <span className="font-bold text-gray-900">2.1x ROAS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI-optimized:</span>
                    <span className="font-bold text-green-600">6.8x ROAS</span>
                  </div>
                  <div className="flex justify-between border-t pt-3 mt-3">
                    <span className="font-bold text-gray-900">Improvement:</span>
                    <span className="font-bold text-green-600">↑ 224%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-10 border-l-4 border-black">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">⚙️ Automated Workflow Orchestration</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From lead capture to nurture sequences to follow-ups—everything runs on autopilot. 
                  Your team saves 20+ hours per week while conversion rates double.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Automatic lead enrichment via API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Personalized email sequences (AI-generated)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Smart scheduling based on engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Real-time Slack/email alerts on hot leads</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-10 border-l-4 border-black">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">📈 Real-Time Analytics Dashboard</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Forget waiting for monthly reports. Our custom dashboards update every 15 minutes 
                  with actionable insights, anomaly detection, and recommended actions.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Multi-channel attribution modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Cohort analysis & retention metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Predictive revenue forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Automated alert system for anomalies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ROI Calculator CTA */}
            <div className="bg-black text-white p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Calculate Your Potential ROI
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Based on 50+ client implementations, businesses see an average 380% ROI increase 
                within 90 days of implementing our AI-powered marketing stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-100 transition-colors">
                  GET FREE AUDIT
                </button>
                <Link 
                  href="/case-studies"
                  className="bg-white/10 border border-white/20 text-white px-8 py-4 font-bold hover:bg-white/20 transition-colors"
                >
                  SEE CASE STUDIES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        BLOG POSTS SECTION
        Automatically pulls from WordPress - no changes needed
      */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Latest Insights & Case Studies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn how we're helping businesses achieve breakthrough results with 
                data-driven digital marketing.
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
                      Verify WordPress REST API is accessible at: next.promot.co.in/wp-json/wp/v2/posts
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!error && posts.length === 0 && (
              <div className="text-center py-16 bg-white border-2 border-dashed border-gray-300">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-xl text-gray-600 font-medium">No posts found</p>
                <p className="text-gray-500 mt-2">Create case studies and articles in WordPress to showcase your work.</p>
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
                      className="text-xl font-bold mb-3 text-gray-900 group-hover:underline"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    
                    <div 
                      className="text-gray-600 mb-6 line-clamp-3 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold uppercase tracking-wider hover:underline text-gray-900"
                    >
                      Read More
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

      {/* 
        FINAL CTA
        Edit URLs and messaging as needed
      */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to 3-5x Your Marketing ROI?
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Stop wasting ad spend. Start using AI, machine learning, and data analytics 
              to make every rupee count. Free audit for qualified businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/metrics"
                className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
              >
                View Technical Specs
              </Link>
              <a 
                href="https://www.promot.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 font-bold uppercase tracking-wide hover:bg-white/20 transition-colors"
              >
                Contact Us
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
                  AI-powered digital marketing that delivers measurable ROI. 
                  Machine learning, predictive analytics, and automated workflows 
                  for modern businesses.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
                  Our Approach
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>Machine Learning Lead Scoring</li>
                  <li>Predictive Budget Allocation</li>
                  <li>Automated Workflow Orchestration</li>
                  <li>Real-Time Analytics Dashboards</li>
                  <li>Headless CMS Architecture</li>
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