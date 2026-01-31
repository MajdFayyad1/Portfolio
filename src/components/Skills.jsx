import React, { useEffect, useRef } from 'react';
import { Code2, Users, MessageSquare, Clock, Laptop, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef(null);

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

    const elements = skillsRef.current?.querySelectorAll('.fade-in, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const softSkills = [
    { name: 'Problem-Solving', icon: Code2 },
    { name: 'Teamwork', icon: Users },
    { name: 'Effective Communication', icon: MessageSquare },
    { name: 'Time Management', icon: Clock },
  ];

  const technicalSkills = [
    {
      category: 'Programming & Software Development',
      icon: Code2,
      skills: ['Java', 'Object-Oriented Programming (OOP)', 'Python (Machine Learning)'],
      color: 'emerald',
    },
    {
      category: 'Web Development',
      icon: Laptop,
      skills: [
        'Frontend: HTML, CSS, JavaScript, React.js',
        'Backend: PHP, Node.js, Python, Express',
        'APIs and Database Creation',
      ],
      color: 'blue',
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      skills: ['Flutter', 'Dart'],
      color: 'purple',
    },
  ];

  return (
    <section id="skills" ref={skillsRef} className="bg-slate-900 relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-emerald-500 mb-8 text-center fade-in">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="scale-in hover-lift bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="text-emerald-500" size={32} />
                    </div>
                    <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-emerald-500 mb-8 text-center fade-in">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="scale-in hover-lift bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <Icon className="text-emerald-500" size={28} />
                    </div>
                    <h4 className="text-white font-semibold text-xl">{category.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start space-x-2">
                        <span className="text-emerald-500 mt-1.5">•</span>
                        <span className="text-slate-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
