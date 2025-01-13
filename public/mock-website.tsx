"use client";
import React from 'react';

const MockWebsite = () => {
  const features = [
    {
      icon: '📈',
      title: 'Real-Time Analytics',
      description: 'Track user behavior and engagement with millisecond precision',
      metrics: ['500k+ Events/sec', '99.99% Accuracy'],
      color: 'from-blue-500/20 to-violet-500/20'
    },
    {
      icon: '🎯',
      title: 'Smart Targeting',
      description: 'AI-powered user segmentation and personalization',
      metrics: ['2x Conversion Rate', '45% Better ROI'],
      color: 'from-emerald-500/20 to-blue-500/20'
    },
    {
      icon: '⚡',
      title: 'Edge Computing',
      description: 'Global CDN with ultra-low latency data processing',
      metrics: ['150+ Locations', '<50ms Latency'],
      color: 'from-violet-500/20 to-rose-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 h-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              metric.ai
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['Products', 'Solutions', 'Pricing', 'Docs'].map((item) => (
                <button key={item} className="text-white/70 hover:text-white transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-white/70 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Background Elements */}
      <div className="fixed inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[128px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[96px] translate-y-1/2" />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-32">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-24">
            <div className="inline-block animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-white/70 text-sm">New: AI-Powered Analytics Pipeline</span>
                <span className="text-white/40">•</span>
                <button className="text-white/70 hover:text-white transition-colors">Learn More →</button>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-white">Analyze Your Data With</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Machine Learning
                </span>
              </h1>

              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Transform raw data into actionable insights with our AI-powered analytics platform.
                Built for scale, designed for humans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-white/10 text-white font-medium hover:bg-zinc-800 transition-all duration-300 group">
                Watch Demo
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>

            {/* Metrics Bar */}
            <div className="pt-12">
              <div className="p-4 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Active Users', value: '100K+' },
                    { label: 'Data Processed', value: '1PB+' },
                    { label: 'Avg Response', value: '<50ms' },
                    { label: 'Customer Rating', value: '4.9/5' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/50 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Analytics</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Powerful features designed for modern data teams. Scale from gigabytes to petabytes without breaking a sweat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, ${feature.color.split(' ')[0]}, ${feature.color.split(' ')[1]})` }}
                  />
                  
                  <div className="relative space-y-4">
                    <span className="text-4xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-2">
                      {feature.metrics.map((metric, j) => (
                        <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-white">
                Ready to Transform Your Data?
              </h2>
              <p className="text-white/60">
                Join thousands of data-driven companies using metric.ai to power their analytics.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-white/10 text-white font-medium hover:bg-zinc-800 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockWebsite;
