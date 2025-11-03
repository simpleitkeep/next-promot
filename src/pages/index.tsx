import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '../components/ContactForm';
import { CheckCircle, Zap, TrendingUp, Globe, Shield, Clock } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your WordPress into Lightning-Fast, Omnichannel Storefronts
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              We decouple WordPress as a headless CMS and build SEO-optimized Next.js front ends. Fast pilots, clear ROI, measurable results in 2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your 2-Week Pilot
              </a>
              <a 
                href="#process" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">2 Weeks</div>
                <div className="text-sm text-gray-400 mt-1">Pilot Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">3-5x</div>
                <div className="text-sm text-gray-400 mt-1">Faster Load Times</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">40%+</div>
                <div className="text-sm text-gray-400 mt-1">Conversion Uplift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Hidden Cost of Traditional WordPress
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your WordPress site might be costing you more conversions than you realize
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Poor Performance Kills Conversion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional WordPress themes and plugin stacks produce high Time To First Byte, slow Core Web Vitals, and unpredictable render times. This directly reduces conversion on landing pages and product pages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Coupled Workflow Compromises
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Marketing teams want WordPress editing simplicity, while engineering teams want React for performance and modern UX. Classic WordPress forces everyone to compromise on their workflow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Omnichannel is Nearly Impossible
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When you need the same content on web, mobile app, kiosks, or PWA, coupled WordPress makes content reuse, caching, and consistent delivery extremely difficult and expensive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SEO and Maintenance Debt
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Poorly configured WordPress or SPAs can lose search visibility. Technical debt accumulates, making future features slow and increasingly expensive to implement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fear of Replatforming Risk
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete replatforming means time, cost, and vendor lock-in risks. You want incremental improvement with measurable ROI, not a risky all-or-nothing migration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-sm text-white">
              <h3 className="text-xl font-bold mb-3">
                The Bottom Line
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every second of delay costs you revenue. A 1-second improvement in load time can increase conversions by 7%.
              </p>
              <p className="text-2xl font-bold text-green-400">
                Can you afford to wait?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Headless WordPress Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your WordPress editing experience. Get blazing-fast Next.js performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How It Works
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Keep WordPress as Your CMS</h4>
                    <p className="text-gray-600">Your content team continues using the familiar WordPress editor. No retraining needed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expose Content via GraphQL API</h4>
                    <p className="text-gray-600">We configure WordPress to serve content through a modern, flexible API that can feed any channel.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Build Lightning-Fast Next.js Frontend</h4>
                    <p className="text-gray-600">We create a modern, SEO-optimized React frontend with server-side rendering, static generation, and edge caching.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deploy to Global CDN</h4>
                    <p className="text-gray-600">Your site runs on Vercel edge network, delivering content from the closest location to each visitor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You Get
              </h3>
              <ul className="space-y-4">
                {[
                  'WordPress CMS retained with familiar editing',
                  'Next.js frontend with SSR/SSG for performance',
                  'GraphQL API for flexible content delivery',
                  'Optimized images and assets on CDN',
                  'Perfect Lighthouse scores (90+ across all metrics)',
                  'SEO-optimized with server rendering',
                  'Mobile-first responsive design',
                  'Analytics and conversion tracking setup',
                  'Cache invalidation and deployment automation',
                  '30-day monitoring and support package'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Why Choose Promot
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Cost-Efficient</div>
                <p className="text-gray-300">For the same budget a UK firm spends on discovery, we deliver a measurable pilot plus roadmap.</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">One Vendor</div>
                <p className="text-gray-300">CMS modeling, frontend engineering, SEO, and analytics in one package. Fewer handoffs, faster outcomes.</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">D2C Focus</div>
                <p className="text-gray-300">We understand cart optimization, checkout UX, and LTV metrics—not just generic builds.</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">Clear SLAs</div>
                <p className="text-gray-300">English fluency, UK time overlap, packaged sprints, and proof-of-value guarantees reduce risk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your 2-Week Pilot: Day by Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, transparent process from discovery to deployment
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6">
                  D0-2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery Phase</h3>
                  <p className="text-gray-600 mb-4">We identify your business KPIs, analyze your top-performing pages and conversion points, establish baseline metrics including TTFB, LCP, CLS, and FCP, and map your content structure.</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900">Deliverable: Performance baseline report and content architecture document</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6">
                  D3-10
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Pilot Build</h3>
                  <p className="text-gray-600 mb-4">Configure WordPress GraphQL API with custom post types and fields. Implement Next.js frontend with server-side rendering and static generation for critical pages. Connect assets to CDN with image optimization. Set up caching strategies.</p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-900">Deliverable: Working headless site on staging environment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6">
                  D11-12
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Testing and SEO</h3>
                  <p className="text-gray-600 mb-4">Validate server-side rendering, configure metadata and canonicalization, implement XML sitemap and schema markup, test with Googlebot simulation tools, ensure accessibility compliance.</p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-purple-900">Deliverable: SEO audit report and Lighthouse performance scores</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-6">
                  D13-14
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Launch and Measurement</h3>
                  <p className="text-gray-600 mb-4">Deploy from staging to production, run Core Web Vitals measurements, set up analytics dashboards with conversion tracking, configure A/B testing for critical CTAs where applicable.</p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-orange-900">Deliverable: Live production site with analytics dashboard and performance comparison report</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-sm p-8 text-white">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-white text-gray-900 rounded-lg flex items-center justify-center font-bold text-xl mr-6">
                  D15+
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Handover and Operations</h3>
                  <p className="text-gray-300 mb-4">Complete operational runbook covering cache invalidation and deployment procedures. 30-day monitoring retainer with ongoing support and optimization recommendations.</p>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm font-semibold">Deliverable: Documentation package and ongoing support agreement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics We Track */}
          <div className="mt-16 bg-white rounded-2xl p-8 sm:p-12 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How We Measure Success
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Performance Metrics</h4>
                <p className="text-gray-600 text-sm">Pre/post Core Web Vitals (LCP, INP, CLS), TTFB, and Largest Contentful Paint measurements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Conversion Impact</h4>
                <p className="text-gray-600 text-sm">Conversion rate per critical page, revenue per visitor uplift, and A/B test results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">SEO Performance</h4>
                <p className="text-gray-600 text-sm">Indexation checks, organic traffic tracking over 30/90 days, and search ranking improvements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your WordPress Site?
          </h2>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100">
            Start with a 2-week pilot. Measurable results. Clear ROI. Zero risk.
          </p>
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}