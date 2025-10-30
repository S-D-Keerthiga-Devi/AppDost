import React from 'react';
import { Monitor, Smartphone, Zap, CheckCircle, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {        
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-violet-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <section className="relative py-12 sm:py-20 lg:py-28">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 mb-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-indigo-600 animate-pulse" />
                  <div className="absolute inset-0 bg-indigo-400 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
                <span className="text-sm font-semibold text-gray-800">Complete IT Solution Provider Since 2025</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                  Transform Your
                </h1>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="relative inline-block group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                    <h1 className="relative text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-6xl lg:text-7xl animate-gradient">
                      Ideas
                    </h1>
                  </div>
                  <span className="text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl">Into</span>
                </div>
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                  <h1 className="relative text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-6xl lg:text-7xl">
                    Digital Reality
                  </h1>
                </div>
              </div>

              {/* Description */}
              <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
                Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring 
                <span className="font-semibold text-indigo-600"> innovation</span> and 
                <span className="font-semibold text-indigo-600"> excellence</span> to every project with our expert team of developers.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden" 
                  role="button"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>

                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-indigo-700 bg-white hover:bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-indigo-100"
                  role="button"
                >
                  <span className="flex items-center gap-2">
                    Get Free Consultation
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">100% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                    <Shield className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Secure & Scalable</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Side - Premium Floating Cards */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-[650px]">
                {/* Web Development Card */}
                <div className="absolute top-8 right-0 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-7 w-72 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-blue-100 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">Web Development</h3>
                      <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">+10 Projects</p>
                      <p className="text-xs text-gray-500 mt-2">Successfully Delivered</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Apps Card */}
                <div className="absolute top-56 right-16 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-7 w-72 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-purple-100 group" style={{ animationDelay: '0.2s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">Mobile Apps</h3>
                      <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+4 Apps</p>
                      <p className="text-xs text-gray-500 mt-2">iOS & Android</p>
                    </div>
                  </div>
                </div>

                {/* Fast Delivery Card */}
                <div className="absolute bottom-24 right-36 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-7 w-64 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-orange-100 group" style={{ animationDelay: '0.4s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">Fast Delivery</h3>
                      <p className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">On Time</p>
                      <p className="text-xs text-gray-500 mt-2">Every Single Time</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/3 left-0 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-10 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;