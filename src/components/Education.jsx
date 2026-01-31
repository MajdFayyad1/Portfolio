import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationRef = useRef(null);

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

    const elements = educationRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'Lebanese International University (LIU)',
      year: '2022 - 2026',
      status: 'Completed',
      side: 'left',
    },
    {
      degree: 'Bac II - Life Science',
      institution: 'Lebanese Modern College (LMC)',
      year: '2022',
      status: 'Completed',
      side: 'right',
    },
  ];

  return (
    <section id="education" ref={educationRef} className="bg-slate-900 relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-500/30"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${edu.side === 'left' ? 'slide-in-left' : 'slide-in-right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`md:flex items-center ${edu.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className="md:w-5/12">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover-lift">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-emerald-500/10 rounded-lg">
                          <GraduationCap className="text-emerald-500" size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                          <p className="text-emerald-500 font-semibold mb-3">{edu.institution}</p>
                          <div className="flex items-center space-x-2 text-slate-400">
                            <Calendar size={16} />
                            <span>{edu.year}</span>
                          </div>
                          <div className="mt-3">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                edu.status === 'Completed'
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}
                            >
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block md:w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-900 shadow-lg shadow-emerald-500/50 z-10"></div>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
