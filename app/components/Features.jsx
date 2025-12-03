import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../Constants';

const gradients = [
  { gradientFrom: '#0f0f0f', gradientTo: '#60a5fa' },
  { gradientFrom: '#0f0f0f', gradientTo: '#818cf7' },
  { gradientFrom: '#0f0f0f', gradientTo: '#f573b6' },
  { gradientFrom: '#0f0f0f', gradientTo: '#21d2ed' },
  { gradientFrom: '#0f0f0f', gradientTo: '#a78bfa' },
  { gradientFrom: '#0f0f0f', gradientTo: '#f59e0b' },
];

const COLOR_BY_ID = {
  'web-dev': { textHover: 'group-hover:text-blue-400' },
  'mobile-app': { textHover: 'group-hover:text-indigo-400' },
  'ui-ux': { textHover: 'group-hover:text-pink-400' },
  'crm-backend': { textHover: 'group-hover:text-cyan-400' },
  'ai-integration': { textHover: 'group-hover:text-purple-400' },
  'performance': { textHover: 'group-hover:text-amber-400' },
};

const ACCENT_HEX_BY_ID = {
  'web-dev': '#60a5fa',
  'mobile-app': '#818cf8',
  'ui-ux': '#f472b6',
  'crm-backend': '#22d3ee',
  'ai-integration': '#a78bfa',
  'performance': '#f59e0b',
};

export default function SkewCards() {
  return (
    <>
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">What I Offer</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, I deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <Link key={service.id} href={`/services?service=${service.id}`} className="block group">
                <div className="relative h-[400px] transition-all duration-500">

                  {/* Gradient panels */}
                  <span
                    className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                    style={{
                      background: `linear-gradient(315deg, ${gradients[idx % gradients.length].gradientFrom}, ${gradients[idx % gradients.length].gradientTo})`,
                    }}
                  />
                  <span
                    className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                    style={{
                      background: `linear-gradient(315deg, ${gradients[idx % gradients.length].gradientFrom}, ${gradients[idx % gradients.length].gradientTo})`,
                    }}
                  />

                  {/* Blobs */}
                  <span className="pointer-events-none absolute inset-0 z-10">
                    <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                    <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                  </span>

                  {/* Content card */}
                  <div className="relative z-20 left-0 p-[20px_40px] bg-[#121212]/80 border border-white/10 backdrop-blur-[10px] shadow-lg rounded-3xl text-white transition-all duration-500 group-hover:left-[-5px] group-hover:p-[60px_40px] h-full">

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-4xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 mb-4">
                      <span className={`relative ${COLOR_BY_ID[service.id]?.textHover ?? ''}`}>
                        {service.icon}
                      </span>
                    </div>

                    <h2 className="text-2xl mb-2">{service.title}</h2>
                    <p className="text-md leading-relaxed mb-4 text-gray-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mt-2 space-y-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <span className="relative w-1.5 h-1.5">
                            <span
                              className="absolute inset-0 rounded-full"
                              style={{ backgroundColor: ACCENT_HEX_BY_ID[service.id] ?? '#60a5fa' }}
                            />
                            <span
                              className="absolute inset-0 rounded-full blur-[6px] opacity-0 group-hover:opacity-100"
                              style={{ backgroundColor: ACCENT_HEX_BY_ID[service.id] ?? '#60a5fa' }}
                            />
                          </span>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                      <div className="p-2 rounded-full bg-white/10 text-white group-hover:bg-blue-500 group-hover:text-white">
                        <ArrowRight size={16} />
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
