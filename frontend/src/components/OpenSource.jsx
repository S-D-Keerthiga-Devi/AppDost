import React from 'react';
import { Github, Bot, GraduationCap, MessageSquare, Cpu } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      icon: <Cpu className="w-10 h-10" />,
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
      gradient: "from-indigo-50 to-purple-50",
      accentColor: "indigo",
      title: "DeepFake Detection",
      subtitle: "AI/ML Summer Internship Project",
      tags: ["AI/ML", "Jupyter"],
      description: "Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer internship research project.",
      githubUrl: "/"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      gradient: "from-emerald-50 to-teal-50",
      accentColor: "emerald",
      title: "NooBot",
      subtitle: "Intelligent Python Automation Bot",
      tags: ["Python", "Automation"],
      description: "Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.",
      githubUrl: "/"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
      gradient: "from-pink-50 to-rose-50",
      accentColor: "pink",
      title: "EduTools",
      subtitle: "Educational Web Platform",
      tags: ["HTML/CSS", "Education"],
      description: "Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.",
      githubUrl: "/"
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
      gradient: "from-cyan-50 to-blue-50",
      accentColor: "cyan",
      title: "DialogFlow Chatbot",
      subtitle: "Conversational AI Assistant",
      tags: ["DialogFlow", "NLP"],
      description: "Intelligent chatbot using Google's DialogFlow ES for natural language processing and automated customer support.",
      githubUrl: "/"
    }
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
              Open Source
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-pj leading-tight">
            Open Source & Innovation Projects
          </h2>
          <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 font-pj max-w-2xl mx-auto">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Top Section */}
              <div className={`relative bg-gradient-to-br ${project.gradient} p-8 pb-6 border-b border-gray-100`}>
                {/* Icon */}
                <div className={`inline-flex p-4 ${project.iconBg} rounded-2xl shadow-lg mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {project.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-sm text-gray-600 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Content Section */}
              <div className="p-6 pt-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                        project.accentColor === 'indigo' ? 'bg-indigo-50 text-indigo-700' :
                        project.accentColor === 'emerald' ? 'bg-emerald-50 text-emerald-700' :
                        project.accentColor === 'pink' ? 'bg-pink-50 text-pink-700' :
                        'bg-cyan-50 text-cyan-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* GitHub Button */}
                <a
                  href={project.githubUrl}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${
                    project.accentColor === 'indigo' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' :
                    project.accentColor === 'emerald' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700' :
                    project.accentColor === 'pink' ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700' :
                    'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub →
                </a>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-30 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to contribute or learn more about our projects?
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-indigo-600 bg-white border-2 border-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
            Visit Our GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default OpenSource;