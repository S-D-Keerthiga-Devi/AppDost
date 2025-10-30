import React from 'react';

const Steps = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-indigo-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Development Process
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-white/30 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <svg className="w-full" viewBox="0 0 1000 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20 Q 250 0, 500 20 T 1000 20" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="3" strokeDasharray="8,8" fill="none"/>
            </svg>
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
            {/* Step 1 */}
            <div className="group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white"> 1 </span>
              </div>
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-indigo-100">
                <h3 className="text-xl font-bold leading-tight text-gray-900">
                  Discovery & Planning
                </h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white"> 2 </span>
              </div>
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-indigo-100">
                <h3 className="text-xl font-bold leading-tight text-gray-900">
                  Design & Prototype
                </h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white"> 3 </span>
              </div>
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-indigo-100">
                <h3 className="text-xl font-bold leading-tight text-gray-900">
                  Development & Testing
                </h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white"> 4 </span>
              </div>
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-indigo-100">
                <h3 className="text-xl font-bold leading-tight text-gray-900">
                  Deployment & Support
                </h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;