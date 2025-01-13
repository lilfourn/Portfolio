"use client";

import React from 'react';
import { CircleDot } from 'lucide-react';

interface WebsitePreviewProps {
  imageUrl?: string;
  websiteUrl?: string;
}

const WebsitePreview = ({ imageUrl, websiteUrl = 'metric.ai' }: WebsitePreviewProps) => {
  const features = [
    {
      icon: '📈',
      title: 'Real-Time Analytics',
      metrics: ['500k+/s'],
      color: 'from-blue-500/20 to-violet-500/20'
    },
    {
      icon: '🎯',
      title: 'Smart Targeting',
      metrics: ['2x ROI'],
      color: 'from-emerald-500/20 to-blue-500/20'
    },
    {
      icon: '⚡',
      title: 'Edge Computing',
      metrics: ['<50ms'],
      color: 'from-violet-500/20 to-rose-500/20'
    }
  ];

  return (
    <div className="h-[calc(100vh-35rem)] w-full bg-gradient-to-br from-zinc-900/40 to-zinc-800/40 rounded-lg shadow-xl backdrop-blur-sm border border-white/10 overflow-hidden">
      {/* Browser Chrome */}
      <div className="h-10 bg-zinc-950/50 border-b border-white/10 flex items-center px-4 gap-4">
        {/* Window Controls */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        
        {/* URL Bar */}
        <div className="flex-1 flex items-center gap-2">
          <div className="flex-1 h-6 px-3 text-xs bg-zinc-950 rounded border border-white/10 flex items-center text-zinc-400">
            {websiteUrl}
          </div>
        </div>
      </div>

      {/* Website Screenshot Container */}
      <div className="relative h-[calc(100%-2.5rem)] w-full bg-zinc-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[64px] -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[48px] translate-y-1/2" />
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Main Content */}
        <div className="relative h-full overflow-y-auto">
          {/* Navigation */}
          <nav className="sticky top-0 h-12 border-b border-white/10 bg-zinc-950/80 backdrop-blur-sm z-50">
            <div className="h-full px-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  metric.ai
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 text-xs text-white/70 hover:text-white transition-colors">
                  Sign In
                </button>
                <button className="px-2 py-1 text-xs rounded-lg bg-zinc-900/50 border border-white/10 text-white/70 hover:text-white transition-colors">
                  Trial
                </button>
              </div>
            </div>
          </nav>

          <div className="px-6 py-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 mb-12">
              <div className="inline-block">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white/70 text-xs">New: AI Analytics Pipeline</span>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-bold tracking-tight">
                  <span className="text-white">Analyze Your Data With</span>
                  <span className="block mt-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                    Machine Learning
                  </span>
                </h1>

                <p className="text-xs text-white/60 max-w-sm mx-auto">
                  Transform raw data into actionable insights with our AI-powered platform.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button className="px-4 py-2 text-xs rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-4 py-2 text-xs rounded-lg bg-zinc-900 border border-white/10 text-white font-medium hover:bg-zinc-800 transition-all duration-300 group">
                  Watch Demo
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative space-y-2">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xs font-semibold text-white">{feature.title}</h3>
                      <div className="mt-2">
                        {feature.metrics.map((metric, j) => (
                          <span key={j} className="px-2 py-0.5 rounded-full bg-white/5 text-white/70 text-[10px]">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r"
                    style={{ background: `linear-gradient(to right, ${feature.color.split(' ')[0]}, ${feature.color.split(' ')[1]})` }}
                  />
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="mt-8 py-3 px-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-4 divide-x divide-white/10">
                {[
                  { value: '100K+', label: 'Users' },
                  { value: '1PB+', label: 'Data' },
                  { value: '<50ms', label: 'Latency' },
                  { value: '4.9/5', label: 'Rating' }
                ].map((stat, i) => (
                  <div key={i} className="text-center px-2">
                    <div className="text-xs font-bold text-white">{stat.value}</div>
                    <div className="text-white/50 text-[10px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;