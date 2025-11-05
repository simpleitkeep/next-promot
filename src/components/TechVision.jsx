'use client';
   
   import React, { useState } from 'react';
   import { Info, TrendingUp, Zap, Shield, Database, Layers, Code, Brain, MousePointerClick } from 'lucide-react';

   const TechVisionComponent = () => {
     const [selectedLayer, setSelectedLayer] = useState(null);
     const [selectedPhase, setSelectedPhase] = useState(2);

  const layers = [
    {
      id: 'ux',
      name: 'User Experience',
      color: 'bg-yellow-500',
      darkColor: 'bg-yellow-600',
      icon: Code,
      purpose: 'Front-end layer that interacts with users',
      trends: 'Headless Frontends, Micro-frontends, React Server Components',
      tools: 'Next.js, React, Vue, SvelteKit, Tailwind',
      impact: 'Anyone can build branded, performant UIs without deep infra knowledge',
      problem: 'Small businesses struggled to create professional, fast websites that work across all devices',
      solution: 'Modern frameworks let you build stunning, responsive experiences without hiring a large development team',
      beneficiary: 'Business owners and small teams who want to compete on user experience'
    },
    {
      id: 'cms',
      name: 'Content & Experience',
      color: 'bg-yellow-400',
      darkColor: 'bg-yellow-500',
      icon: Layers,
      purpose: 'Manages digital content separately from presentation',
      trends: 'Headless CMS, API-driven content, Omnichannel delivery',
      tools: 'WordPress+WPGraphQL, Strapi, Sanity, Hygraph',
      impact: 'Businesses control content without dev intervention',
      problem: 'Updating website content required developers, causing delays and costs for every simple change',
      solution: 'Headless CMS separates content from design, letting marketing teams update text, images, and pages independently',
      beneficiary: 'Marketing teams and content creators who need agility'
    },
    {
      id: 'api',
      name: 'Integration & API',
      color: 'bg-purple-500',
      darkColor: 'bg-purple-600',
      icon: Zap,
      purpose: 'Connects all systems via standardized contracts',
      trends: 'API-first design, GraphQL Federation, gRPC, REST',
      tools: 'Apollo, tRPC, Postman, Kong',
      impact: 'Lowers integration cost; small teams can plug into enterprise data',
      problem: 'Connecting payment systems, CRMs, and analytics tools required expensive custom development',
      solution: 'Standardized APIs let different software talk to each other seamlessly, like plugging devices into universal outlets',
      beneficiary: 'Growing businesses needing to connect multiple tools without technical debt'
    },
    {
      id: 'logic',
      name: 'Business Logic',
      color: 'bg-orange-500',
      darkColor: 'bg-orange-600',
      icon: Brain,
      purpose: 'Holds domain logic and rules',
      trends: 'Microservices, Serverless Functions, Domain-Driven Design',
      tools: 'AWS Lambda, Vercel Functions, Cloudflare Workers',
      impact: 'Each process can scale independently; easy to outsource or extend',
      problem: 'Traditional servers were expensive to maintain and scaled poorly during traffic spikes',
      solution: 'Serverless functions run only when needed, automatically scaling up during busy periods and costing nothing when idle',
      beneficiary: 'Businesses with variable traffic who want to pay only for what they use'
    },
    {
      id: 'data',
      name: 'Data & Intelligence',
      color: 'bg-green-500',
      darkColor: 'bg-green-600',
      icon: Database,
      purpose: 'Stores, processes, and learns from data',
      trends: 'Data Mesh, Lakehouse, Realtime analytics, MLOps',
      tools: 'BigQuery, Snowflake, Supabase, Kafka, Airbyte, dbt',
      impact: 'Democratizes insights; small orgs can run predictive analytics cheaply',
      problem: 'Enterprise-grade analytics and data warehouses cost hundreds of thousands, locking out small businesses',
      solution: 'Cloud data platforms offer pay-as-you-go analytics that reveal customer patterns, predict trends, and inform decisions',
      beneficiary: 'Data-driven founders who want insights without hiring data scientists'
    },
    {
      id: 'automation',
      name: 'Automation & Orchestration',
      color: 'bg-indigo-500',
      darkColor: 'bg-indigo-600',
      icon: TrendingUp,
      purpose: 'Links systems and events',
      trends: 'Event-driven workflows, Low-code automation, CI/CD',
      tools: 'n8n, Zapier, Temporal, GitHub Actions, Airflow',
      impact: 'Enables automation without large engineering teams',
      problem: 'Repetitive tasks like sending invoices, updating spreadsheets, or syncing data consumed valuable employee time',
      solution: 'Automation platforms connect your apps to work together, triggering actions automatically based on events',
      beneficiary: 'Operations teams tired of manual data entry and repetitive processes'
    },
    {
      id: 'infra',
      name: 'Infrastructure',
      color: 'bg-blue-500',
      darkColor: 'bg-blue-600',
      icon: Layers,
      purpose: 'Underlying compute, storage, and networking',
      trends: 'Containers, Serverless, Multi-cloud, IaC',
      tools: 'Docker, Kubernetes, Terraform, Vercel, Netlify',
      impact: 'Cloud removes need for physical infra; pay-as-you-go scales down and up',
      problem: 'Buying and maintaining physical servers required huge upfront capital and dedicated IT staff',
      solution: 'Cloud infrastructure provides enterprise-grade computing power on-demand, starting at a few dollars monthly',
      beneficiary: 'Startups and SMBs who need professional hosting without capital expenditure'
    },
    {
      id: 'security',
      name: 'Security & Governance',
      color: 'bg-blue-700',
      darkColor: 'bg-blue-800',
      icon: Shield,
      purpose: 'Protects data and compliance',
      trends: 'Zero-Trust, IAM, Policy-as-Code',
      tools: 'Auth0, Okta, AWS IAM, OPA',
      impact: 'Built-in security frameworks now come "as-a-service", reducing risk cost',
      problem: 'Implementing proper security and compliance was complex, requiring specialized security engineers',
      solution: 'Security-as-a-Service platforms provide bank-level protection with simple setup, ensuring data safety and regulatory compliance',
      beneficiary: 'Business owners handling customer data who need trust without security expertise'
    }
  ];

  const evolutionPhases = [
    { id: 0, name: 'Monolithic', desc: 'Tight coupling, manual deploys', progress: 0 },
    { id: 1, name: 'Headless & API-Driven', desc: 'Front-end + CMS separation', progress: 25 },
    { id: 2, name: 'Microservices / Serverless', desc: 'Decompose backend logic', progress: 50, current: true },
    { id: 3, name: 'Data Mesh & Automation', desc: 'Integrate analytics across clients', progress: 75 },
    { id: 4, name: 'Adaptive / AI-Driven', desc: 'Continuous optimization via ML', progress: 100 }
  ];

  const capabilities = [
    { 
      name: 'Observability', 
      icon: '📊', 
      color: 'text-blue-400',
      problem: 'Companies couldn\'t see where problems occurred until customers complained',
      solution: 'Real-time monitoring shows exactly what\'s happening across your entire system'
    },
    { 
      name: 'DevOps', 
      icon: '⚙️', 
      color: 'text-purple-400',
      problem: 'Deploying updates took days and often broke things',
      solution: 'Automated deployment pipelines push updates safely in minutes'
    },
    { 
      name: 'AI/ML', 
      icon: '🤖', 
      color: 'text-orange-400',
      problem: 'Personalization and prediction required data science teams',
      solution: 'Pre-built AI services add intelligence to your apps without ML expertise'
    },
    { 
      name: 'Governance', 
      icon: '🔒', 
      color: 'text-green-400',
      problem: 'GDPR and compliance requirements seemed impossible for small teams',
      solution: 'Policy automation ensures you stay compliant automatically'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Promot Technologies
          </h1>
          <p className="text-xl text-slate-300 mb-2">A Core Tech Division of S.K. Agri Tech Pvt Ltd</p>
          <p className="text-2xl font-semibold text-blue-400 mb-4">Canonical Map of the Decoupled Digital Stack</p>
          <div className="inline-block bg-slate-800 rounded-lg px-6 py-3 border border-slate-700">
            <p className="text-lg text-slate-300 italic">
              "Empowering SMBs with enterprise-grade digital leverage through decoupled architecture, 
              open data pipelines, and automated intelligence."
            </p>
          </div>
        </div>

        {/* Key Principle */}
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-500/30 mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <Info className="w-6 h-6" />
            The Democratization of Technology
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Cloud platforms, open-source tools, and no-code interfaces have transformed what used to cost millions 
            into affordable monthly subscriptions. <span className="text-blue-400 font-semibold">SMBs can now operate with enterprise-grade technology.</span>
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <span className="bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/50">Abstraction → Automation → Accessibility</span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/50">Code → Configuration → Prompt</span>
          </div>
        </div>
      </div>

      {/* Main Architectural Layers */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Architectural Layers</h2>
        <p className="text-center text-slate-400 mb-6 flex items-center justify-center gap-2">
          <MousePointerClick className="w-4 h-4" />
          Click on any layer for more information
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-3">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer === layer.id;
            return (
              <div
                key={layer.id}
                className={`${layer.color} rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected ? 'ring-4 ring-white scale-105 shadow-2xl' : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
              >
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <Icon className="w-8 h-8 mb-2 text-white" />
                  <h3 className="font-bold text-sm text-white leading-tight">{layer.name}</h3>
                  <div className="text-xs text-white/80 mt-2">{idx + 1}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Layer Details */}
        {selectedLayer && (
          <div className="mt-6 bg-slate-800 rounded-xl p-6 border border-slate-700 animate-in fade-in duration-300">
            {layers.filter(l => l.id === selectedLayer).map(layer => (
              <div key={layer.id}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <layer.icon className="w-6 h-6" />
                  {layer.name}
                </h3>
                
                {/* Problem-Solution Section */}
                <div className="mb-6 bg-slate-900 rounded-lg p-5 border border-slate-700">
                  <div className="mb-4">
                    <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                      ❌ The Problem
                    </h4>
                    <p className="text-slate-300">{layer.problem}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                      ✅ How Technology Solves It
                    </h4>
                    <p className="text-slate-300">{layer.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                      👥 Who Benefits
                    </h4>
                    <p className="text-slate-300">{layer.beneficiary}</p>
                  </div>
                </div>

                {/* Technical Details */}
                <div className="grid md:grid-cols-2 gap-4 border-t border-slate-700 pt-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Technical Process</p>
                    <p className="text-white mb-3">{layer.purpose}</p>
                    <p className="text-slate-400 text-sm mb-1">Key Trends</p>
                    <p className="text-white mb-3">{layer.trends}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Tools & Examples</p>
                    <p className="text-white mb-3">{layer.tools}</p>
                    <p className="text-slate-400 text-sm mb-1">Equal Access Impact</p>
                    <p className="text-green-400 font-semibold">{layer.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Horizontal Capabilities */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Cross-Cutting Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map(cap => (
            <div key={cap.name} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className={`text-4xl mb-3 ${cap.color}`}>{cap.icon}</div>
              <h3 className="font-bold text-lg mb-3">{cap.name}</h3>
              <div className="text-sm">
                <p className="text-red-400 mb-2">Problem: <span className="text-slate-300">{cap.problem}</span></p>
                <p className="text-green-400 mb-1">Solution: <span className="text-slate-300">{cap.solution}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evolution Timeline */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Evolutionary Path</h2>
        <p className="text-center text-slate-400 mb-6 flex items-center justify-center gap-2">
          <MousePointerClick className="w-4 h-4" />
          Click on timeline markers to explore each phase
        </p>
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="relative">
            {/* Progress Bar */}
            <div className="absolute top-8 left-0 right-0 h-2 bg-slate-700 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${evolutionPhases[selectedPhase].progress}%` }}
              ></div>
            </div>

            {/* Phase Markers */}
            <div className="relative flex justify-between mb-8">
              {evolutionPhases.map((phase, idx) => (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(idx)}
                  className={`flex flex-col items-center cursor-pointer transition-all ${
                    selectedPhase === idx ? 'transform scale-110' : ''
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-2 transition-all ${
                    selectedPhase >= idx 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg' 
                      : 'bg-slate-700'
                  } ${phase.current ? 'ring-4 ring-yellow-400' : ''}`}>
                    {idx + 1}
                  </div>
                  {phase.current && (
                    <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-bold">
                      CURRENT PHASE
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Phase Details */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-2">{evolutionPhases[selectedPhase].name}</h3>
              <p className="text-slate-300 text-lg">{evolutionPhases[selectedPhase].desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Levels the Field */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why This Levels the Playing Field</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Low Barrier to Entry', desc: 'Small teams deploy enterprise-grade apps in hours', icon: '🚀' },
            { title: 'Composability', desc: 'Pick best-of-breed services; no vendor lock-in', icon: '🧩' },
            { title: 'Data Empowerment', desc: 'Analytics tools are free or low-cost', icon: '📈' },
            { title: 'Automation Multiplier', desc: 'Scale without hiring more people', icon: '⚡' },
            { title: 'AI Assistance', desc: 'Bridge the skill gap with language models', icon: '🤖' },
            { title: 'Cloud Economics', desc: 'Pay-as-you-go scales down as well as up', icon: '💰' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">{item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 rounded-xl p-8 border border-blue-500/30 text-center">
          <h2 className="text-2xl font-bold mb-4">Built for the Future, Accessible Today</h2>
          <p className="text-lg text-slate-300 mb-4">
            This vision document itself is served through the decoupled architecture we champion
          </p>
          <div className="inline-flex items-center gap-2 text-slate-400">
            <span className="font-semibold text-blue-400">Next.js Frontend</span>
            <span>←→</span>
            <span className="font-semibold text-purple-400">WordPress GraphQL API</span>
            <span>→</span>
            <code className="bg-slate-800 px-3 py-1 rounded text-green-400">next.promot.co.in</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechVisionComponent;