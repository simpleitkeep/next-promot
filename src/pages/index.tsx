import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Zap, TrendingUp, Globe, Shield, Clock, ArrowRight, Code, Rocket, BarChart } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Promot Style */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your WordPress into
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Lightning-Fast Storefronts
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
              Headless WordPress + Next.js. Fast pilots, clear ROI, measurable results in 2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                Start Your 2-Week Pilot
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#process" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all"
              >
                See How It Works
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">2 Weeks</div>
                <div className="text-sm sm:text-base text-gray-400 mt-2">Pilot Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">3-5x</div>
                <div className="text-sm sm:text-base text-gray-400 mt-2">Faster Loads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">40%+</div>
                <div className="text-sm sm:text-base text-gray-400 mt-2">Conversion Lift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Grid Style */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The Hidden Cost of Traditional WordPress
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your WordPress site might be costing you more conversions than you realize
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Poor Performance Kills Conversion",
                desc: "High TTFB, slow Core Web Vitals, and unpredictable render times directly reduce conversion on landing and product pages.",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Coupled Workflow Compromises",
                desc: "Marketing wants WordPress simplicity while engineering wants React performance. Classic WP forces everyone to compromise.",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Omnichannel is Nearly Impossible",
                desc: "Delivering the same content across web, mobile app, kiosks, or PWA becomes extremely difficult and expensive.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "SEO and Maintenance Debt",
                desc: "Technical debt accumulates, making future features slow and increasingly expensive to implement.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fear of Replatforming Risk",
                desc: "Complete replatforming means time, cost, and vendor lock-in risks. You want incremental improvement.",
                color: "from-yellow-500 to-green-500"
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: "The Bottom Line",
                desc: "Every second of delay costs revenue. A 1-second improvement can increase conversions by 7%.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Two Column */}
      <section id="solution" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The Headless WordPress Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your WordPress editing experience. Get blazing-fast Next.js performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* How It Works */}
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h3>
              <div className="space-y-6">
                {[
                  { num: "1", title: "Keep WordPress as Your CMS", desc: "Content team continues using the familiar WordPress editor. No retraining needed." },
                  { num: "2", title: "Expose Content via GraphQL API", desc: "Configure WordPress to serve content through a modern, flexible API." },
                  { num: "3", title: "Build Lightning-Fast Next.js Frontend", desc: "Create a modern, SEO-optimized React frontend with SSR and edge caching." },
                  { num: "4", title: "Deploy to Global CDN", desc: "Your site runs on Vercel's edge network, delivering content from the closest location." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-5 group-hover:scale-110 transition-transform shadow-lg">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">What You Get</h3>
              <ul className="space-y-4">
                {[
                  'WordPress CMS retained with familiar editing',
                  'Next.js frontend with SSR/SSG',
                  'GraphQL API for flexible delivery',
                  'Optimized images and assets on CDN',
                  'Perfect Lighthouse scores (90+)',
                  'SEO-optimized with server rendering',
                  'Mobile-first responsive design',
                  'Analytics and conversion tracking',
                  'Cache invalidation automation',
                  '30-day monitoring and support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us - Cards */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Choose Promot</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Cost-Efficient", desc: "For the same budget a UK firm spends on discovery, we deliver a measurable pilot plus roadmap.", gradient: "from-blue-400 to-blue-600" },
                { title: "One Vendor", desc: "CMS modeling, frontend engineering, SEO, and analytics in one package.", gradient: "from-green-400 to-green-600" },
                { title: "D2C Focus", desc: "We understand cart optimization, checkout UX, and LTV metrics—not just generic builds.", gradient: "from-purple-400 to-purple-600" },
                { title: "Clear SLAs", desc: "English fluency, UK time overlap, packaged sprints, and proof-of-value guarantees.", gradient: "from-yellow-400 to-yellow-600" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
                    {item.title}
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Style */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Your 2-Week Pilot: Day by Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, transparent process from discovery to deployment
            </p>
          </div>

          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            {[
              { day: "D0-2", title: "Discovery Phase", color: "blue", desc: "Identify business KPIs, analyze top pages, establish baseline metrics (TTFB, LCP, CLS, FCP), and map content structure.", deliverable: "Performance baseline report and content architecture document" },
              { day: "D3-10", title: "Pilot Build", color: "green", desc: "Configure WordPress GraphQL API, implement Next.js frontend with SSR/SSG, connect assets to CDN with optimization, set up caching.", deliverable: "Working headless site on staging environment" },
              { day: "D11-12", title: "Testing and SEO", color: "purple", desc: "Validate server rendering, configure metadata and canonicalization, implement XML sitemap and schema markup, ensure accessibility.", deliverable: "SEO audit report and Lighthouse performance scores" },
              { day: "D13-14", title: "Launch and Measurement", color: "orange", desc: "Deploy to production, run Core Web Vitals measurements, set up analytics dashboards, configure A/B testing for CTAs.", deliverable: "Live production site with analytics dashboard" },
              { day: "D15+", title: "Handover and Operations", color: "pink", desc: "Complete operational runbook covering cache invalidation and deployment. 30-day monitoring retainer with ongoing support.", deliverable: "Documentation package and ongoing support agreement" }
            ].map((phase, i) => (
              <div key={i} className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all lg:ml-20">
                <div className={`absolute -left-20 top-8 w-16 h-16 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-xl hidden lg:flex`}>
                  {phase.day}
                </div>
                <div className="lg:hidden mb-4">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-700 text-white rounded-lg font-bold`}>
                    {phase.day}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{phase.desc}</p>
                <div className={`bg-${phase.color}-50 rounded-lg p-4 border-l-4 border-${phase.color}-500`}>
                  <p className="text-sm font-semibold text-gray-800">
                    <span className="text-xs uppercase tracking-wide text-gray-500">Deliverable:</span><br/>
                    {phase.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics Section */}
          <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 border-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">How We Measure Success</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: <Zap className="w-10 h-10" />, title: "Performance Metrics", desc: "Pre/post Core Web Vitals (LCP, INP, CLS), TTFB, Largest Contentful Paint", color: "blue" },
                { icon: <TrendingUp className="w-10 h-10" />, title: "Conversion Impact", desc: "Conversion rate per critical page, revenue per visitor uplift, A/B test results", color: "green" },
                { icon: <Globe className="w-10 h-10" />, title: "SEO Performance", desc: "Indexation checks, organic traffic tracking over 30/90 days, search ranking improvements", color: "purple" }
              ].map((metric, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${metric.color}-100 to-${metric.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <div className={`text-${metric.color}-600`}>{metric.icon}</div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xl">{metric.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Promot Style */}
      <section id="contact" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTZjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your WordPress Site?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              Start with a 2-week pilot. Measurable results. Clear ROI. Zero risk.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Your Free Consultation</h3>
            <ContactForm />
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p className="text-sm">
              🔒 Your information is secure and will never be shared. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}