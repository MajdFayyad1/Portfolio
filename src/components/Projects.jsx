import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = projectsRef.current?.querySelectorAll('.fade-in, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI Attendance System',
      description:
        'An intelligent attendance tracking system that leverages AI technology for automated student/employee attendance management. Built with modern web technologies and machine learning capabilities.',
      technologies: ['React.js', 'Node.js', 'Express', 'Python', 'MySQL', 'XAMPP', 'Tailwind', 'Bootstrap'],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const techColors = {
    'React.js': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Node.js': 'bg-green-500/20 text-green-400 border-green-500/30',
    Express: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    Python: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    MySQL: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    XAMPP: 'bg-orange-600/20 text-orange-500 border-orange-600/30',
    Tailwind: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    Bootstrap: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };

  return (
    <section id="projects" ref={projectsRef} className="bg-slate-800/50 relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scale-in hover-lift bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header with Gradient */}
              <div className={`bg-gradient-to-r ${project.gradient} p-1`}>
                <div className="bg-slate-900 p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="p-8">
                <h4 className="text-emerald-500 font-semibold mb-4 text-lg">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-4 py-2 rounded-lg border font-medium text-sm transition-transform hover:scale-110 ${
                        techColors[tech] || 'bg-slate-700/50 text-slate-300 border-slate-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    <Github className="mr-2" size={18} />
                    View Code
                  </Button>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-all">
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-12 fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-400 text-lg">
            More exciting projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
