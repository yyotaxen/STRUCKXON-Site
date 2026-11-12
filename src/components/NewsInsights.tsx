import React, { useState } from 'react';
import { NEWS_INSIGHTS, ASSET_IMAGES } from '../data/fabricationData';
import { NewsInsight } from '../types';
import { ChevronRight, Calendar, Clock, X, BookOpen, Share2 } from 'lucide-react';

export const NewsInsights: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<NewsInsight | null>(null);
  const featured = NEWS_INSIGHTS.find((n) => n.featured) || NEWS_INSIGHTS[0];
  const regularStories = NEWS_INSIGHTS.filter((n) => n.id !== featured.id);

  return (
    <section id="news" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-orange-600 inline-block" />
              <span>News, Metallurgy & Enterprise Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Engineering Updates & Technical Publications
            </h2>
            <p className="text-slate-600 text-sm">
              Discover how our metallurgy engineers, automated welding cells, and safety programs advance heavy manufacturing standards.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Published by STRUCKXON LTD Quality Assurance & Engineering Division
          </div>
        </div>

        {/* ExxonMobil Multi-Column Editorial Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Featured Marquee Story */}
          <div className="lg:col-span-7 group">
            <div
              onClick={() => setActiveArticle(featured)}
              className="border border-slate-200 bg-white hover:border-orange-500/80 transition-all rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                <img
                  src={ASSET_IMAGES.plasmaCnc}
                  alt="Robotic submerged arc welding gantry"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0A192F] text-orange-400 font-mono text-[10px] uppercase font-bold px-2.5 py-1 border border-orange-500/40">
                  Featured Research
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="font-bold text-orange-600 tracking-wider uppercase text-[11px]">
                    {featured.kicker}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] group-hover:text-orange-600 transition-colors leading-snug">
                  {featured.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {featured.summary}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Read Full Technical Report</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Secondary Stories (Clean Haired-Line List) */}
          <div className="lg:col-span-5 space-y-4">
            {regularStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setActiveArticle(story)}
                className="p-5 bg-white border border-slate-200 hover:border-orange-500/80 transition-all rounded-lg cursor-pointer group shadow-xs hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-bold text-orange-600 tracking-wider uppercase text-[10px]">
                    {story.kicker}
                  </span>
                  <span>·</span>
                  <span className="font-mono text-[10px]">{story.date}</span>
                </div>

                <h4 className="text-base font-bold text-[#0A192F] group-hover:text-orange-600 transition-colors leading-snug">
                  {story.title}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                  {story.summary}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                  <span className="font-mono text-[11px]">{story.readTime}</span>
                  <span className="text-orange-600 font-bold group-hover:underline flex items-center gap-1">
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full border border-slate-300 rounded-lg shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Bar in Navy */}
            <div className="bg-[#0A192F] px-6 py-4 flex items-center justify-between text-white border-b border-orange-500/40">
              <div className="flex items-center gap-2 text-xs">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span className="font-mono text-orange-300 font-bold uppercase tracking-wider">
                  STRUCKXON LTD Engineering Dispatch
                </span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="font-bold text-orange-600 uppercase tracking-wider">
                  {activeArticle.kicker}
                </span>
                <span>·</span>
                <span className="font-mono">{activeArticle.date}</span>
                <span>·</span>
                <span className="font-mono">{activeArticle.readTime}</span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#0A192F] leading-tight">
                {activeArticle.title}
              </h2>

              <div className="p-3 bg-slate-100 border-l-4 border-orange-500 text-xs text-slate-700 italic">
                {activeArticle.summary}
              </div>

              <div className="space-y-3 pt-2 text-sm text-slate-700 leading-relaxed">
                {activeArticle.fullContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium">
                  Verified by: STRUCKXON LTD Chief Metallurgist & Welding QA
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-[#0A192F] text-white text-xs font-bold uppercase rounded hover:bg-orange-600 transition-colors"
                >
                  Close Dispatch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
