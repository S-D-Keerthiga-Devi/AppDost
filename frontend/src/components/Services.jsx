import React from 'react';
import { CheckCircle, Trophy, Briefcase, Zap } from 'lucide-react';

const Services = () => {        
  return (
    <div className="relative">
      <section className="relative bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-slate-50 to-indigo-50"></div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="flex items-center px-4 pb-16 bg-gradient-to-br from-slate-50 to-indigo-50 pt-20 sm:px-6 lg:px-8 lg:pb-24 xl:pr-12">
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="inline-block px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 shadow-sm">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                  About AppDost
                </p>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
                Your Trusted Partner for
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Complete Digital Transformation
                </span>
              </h1>
              
              <p className="mt-6 text-base font-normal leading-7 text-gray-600">
                AppDost is your partner for complete digital transformation. Founded in 2025, we are a full-service IT solutions provider specializing in turning innovative ideas into powerful, market-ready products. Our expertise spans the entire development lifecycle, from intuitive UI/UX design to robust software development.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">User-Centric Design</h3>
                    <p className="text-sm text-gray-600 mt-1">Intuitive UI/UX that guarantees user satisfaction and engagement</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-50 rounded-xl border border-green-100">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Cutting-Edge Technology</h3>
                    <p className="text-sm text-gray-600 mt-1">Latest frameworks and tools for scalable, robust solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-100">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Client-Focused Approach</h3>
                    <p className="text-sm text-gray-600 mt-1">Your success is our priority, every step of the way</p>
                  </div>
                </div>
              </div>

              <div className="relative inline-flex mt-10 group">
                <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="#services" className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 border border-transparent rounded-xl hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" role="button">
                  Discover Our Services
                  <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-center px-4 py-16 bg-gradient-to-br from-slate-50 to-indigo-50 sm:px-6 lg:pb-24 lg:px-8 xl:pl-12">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <p className="text-lg font-bold text-gray-900 mb-6">
                Why Choose AppDost?
              </p>

              <div className="space-y-4">
                <div className="group overflow-hidden transition-all duration-200 transform bg-white border border-indigo-100 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                  <div className="px-5 py-6 sm:p-6">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                          100%
                        </p>
                        <p className="mt-1 text-base font-semibold text-gray-900">
                          Client Satisfaction
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Every project delivered with excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group overflow-hidden transition-all duration-200 transform bg-white border border-indigo-100 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                  <div className="px-5 py-6 sm:p-6">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Trophy className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                          15+
                        </p>
                        <p className="mt-1 text-base font-semibold text-gray-900">
                          Projects Delivered
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Successfully completed and deployed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group overflow-hidden transition-all duration-200 transform bg-white border border-indigo-100 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                  <div className="px-5 py-6 sm:p-6">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                          24/7
                        </p>
                        <p className="mt-1 text-base font-semibold text-gray-900">
                          Support Available
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Always here when you need us
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group overflow-hidden transition-all duration-200 transform bg-white border border-indigo-100 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                  <div className="px-5 py-6 sm:p-6">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Zap className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                          Fast
                        </p>
                        <p className="mt-1 text-base font-semibold text-gray-900">
                          Turnaround Time
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Quick delivery without compromising quality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;