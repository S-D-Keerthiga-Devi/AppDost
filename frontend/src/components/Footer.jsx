import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo.jpeg'

const Footer = () => {        
    return (
        <section className="py-16 bg-slate-900 sm:pt-20 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Company Info Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            {/* Fixed Logo Image */}
                            <div className="p-2 rounded-lg bg-white shadow-lg hover:scale-105 transition-transform duration-300">
                                <img
                                    src={logo}
                                    alt="AppDost Logo"
                                    className="w-10 h-10 object-contain" // Changed from object-cover to object-contain
                                />
                            </div>
                            <div>
                                <div className="text-white text-2xl font-bold">AppDost</div>
                                <div className="text-blue-400 text-xs font-semibold tracking-widest">
                                    COMPLETE IT SOLUTION
                                </div>
                            </div>
                        </div>

                        <p className="text-base leading-relaxed text-gray-400 mb-8">
                            Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                                <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Web Projects</div>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                                <div className="text-3xl font-bold text-blue-400 mb-1">4+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Android Apps</div>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 mb-8 inline-block">
                            <div className="text-3xl font-bold text-blue-400 mb-1">1</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">CRM System</div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">App Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">AI & ML Solutions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">CRM Development</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <p>📍 Noida, Uttar Pradesh, India</p>
                            </li>
                            <li>
                                <a href="mailto:info@appdost.com" className="hover:text-blue-400 transition-colors">
                                    ✉️ info@appdost.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+918882081234" className="hover:text-blue-400 transition-colors">
                                    📞 +91 88820 81234
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © 2025 AppDost - Complete IT Solution. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
                            <span className="text-slate-700">•</span>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
                            <span className="text-slate-700">•</span>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Sitemap</a>
                            <span className="text-slate-700">•</span>
                            <span className="text-gray-400 flex items-center gap-1">
                                Built with <span className="text-red-500">❤️</span> in India
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;