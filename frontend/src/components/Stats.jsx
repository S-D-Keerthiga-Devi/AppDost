import React from 'react';
import { Monitor, Smartphone, Target, Rocket } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50 sm:py-20 lg:py-24">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            Our Track Record
          </h2>
          <p className="text-lg text-gray-600">
            Delivering excellence in digital solutions with proven results and commitment to quality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 - Web Projects */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-lg font-semibold text-gray-900 mb-1">Web Projects</p>
                <p className="text-sm text-gray-500">Successfully Delivered</p>
              </div>
            </div>
          </div>

          {/* Stat 2 - Android Apps */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-purple-500 rounded-xl">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold text-gray-900 mb-2">4+</h3>
                <p className="text-lg font-semibold text-gray-900 mb-1">Android Apps</p>
                <p className="text-sm text-gray-500">Built and Launched</p>
              </div>
            </div>
          </div>

          {/* Stat 3 - CRM Project */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-green-500 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold text-gray-900 mb-2">1</h3>
                <p className="text-lg font-semibold text-gray-900 mb-1">CRM System</p>
                <p className="text-sm text-gray-500">Enterprise Solution</p>
              </div>
            </div>
          </div>

          {/* Stat 4 - Founded Year */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-orange-500 rounded-xl">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold text-gray-900 mb-2">2025</h3>
                <p className="text-lg font-semibold text-gray-900 mb-1">Founded Year</p>
                <p className="text-sm text-gray-500">Innovation Starts Here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA or Additional Info (Optional) */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">100% Client Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;