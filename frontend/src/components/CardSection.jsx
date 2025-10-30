import React from 'react';
import { Smartphone, Globe, Palette, Briefcase, Cloud, Lock, CheckCircle } from 'lucide-react';

const CardSection = () => {        
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-indigo-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Delivering cutting-edge solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {/* Android App Development */}
          <div className="md:p-8 lg:p-14 group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Android App Development</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Custom Android applications built with the latest technologies to bring your ideas to life.
            </p>
            <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Native & Hybrid Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Play Store Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Maintenance & Support</span>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-indigo-200 group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Web Development</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Responsive and scalable web applications tailored to your business needs.
            </p>
            <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">E-commerce Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Progressive Web Apps</span>
              </div>
            </div>
          </div>

          {/* UI/UX Development */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-indigo-200 group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">UI/UX Development</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Beautiful, intuitive user interfaces that enhance user experience and engagement.
            </p>
            <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">User Research</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Wireframing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Brand Identity</span>
              </div>
            </div>
          </div>

          {/* CRM Software */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-indigo-200 group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">CRM Software</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Comprehensive CRM solutions to manage customer relationships and boost productivity.
            </p>
            <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Custom Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Integration Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Training & Support</span>
              </div>
            </div>
          </div>

          {/* Cloud Solutions */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-t md:border-indigo-200 group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Cloud Solutions</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Scalable cloud infrastructure and migration services for modern businesses.
            </p>
            <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">AWS, Azure, GCP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Migration Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Performance Tuning</span>
              </div>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-t md:border-indigo-200 group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Cybersecurity</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Protect your business with robust security solutions and best practices.
            </p>
            <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Security Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Penetration Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSection;