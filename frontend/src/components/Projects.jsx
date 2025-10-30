import React from 'react';
import { ExternalLink, Smartphone } from 'lucide-react';

const Projects = () => {        
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      badge: "AI-Powered Educational Platform",
      badgeColor: "bg-indigo-100 text-indigo-700",
      title: "BEU Mate - Bihar Engineering",
      description: "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.",
      tags: ["React Native", "Node.js", "AI/ML"],
      buttons: [
        { 
          label: "Play Store", 
          icon: "smartphone", 
          color: "bg-gradient-to-r from-green-500 to-green-600", 
          url: "/" // ✅ Actual Play Store link
        },
        { 
          label: "Website", 
          icon: "link", 
          color: "bg-gradient-to-r from-indigo-500 to-purple-600", 
          url: "/" // ✅ Actual website link
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      badge: "Educational Platform",
      badgeColor: "bg-purple-100 text-purple-700",
      title: "Devskillquest",
      description: "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, coding challenges, and real-world scenarios.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      buttons: [
        { 
          label: "Website", 
          icon: "link", 
          color: "bg-gradient-to-r from-indigo-500 to-purple-600", 
          url: "/"
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      badge: "Wedding Planning Portal",
      badgeColor: "bg-pink-100 text-pink-700",
      title: "The Weddings Chapter",
      description: "A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor management, booking system, and event coordination.",
      tags: ["PHP", "Laravel", "MySQL"],
      buttons: [
        { 
          label: "Website", 
          icon: "link", 
          color: "bg-gradient-to-r from-indigo-500 to-purple-600", 
          url: "/"
        }
      ]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-indigo-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          <p className="mt-6 text-base font-normal leading-7 text-gray-600">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="relative group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
              
              {/* Project Image */}
              <div className="overflow-hidden aspect-w-16 aspect-h-9 h-64">
                <img 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110" 
                  src={project.image} 
                  alt={project.title}
                />
                {/* ❌ Removed black overlay on hover */}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.buttons.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.url}
                      target="_blank" // ✅ Opens in new tab
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${button.color}`}
                    >
                      {button.icon === 'smartphone' ? (
                        <Smartphone className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
