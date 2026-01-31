import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const About = () => {
  const aboutRef = useRef(null);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in, .slide-in-left');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Hasbaya, El-Janoub, Lebanon' },
    { icon: Phone, label: 'Phone', value: '+961 76 498 957', href: 'tel:+96176498957' },
    { icon: Mail, label: 'Email', value: 'majd_fayyad@icloud.com', href: 'mailto:majd_fayyad@icloud.com' },
    { icon: Globe, label: 'Languages', value: 'Arabic (Native), English (Advanced)' },
  ];

  return (
    <section id="about" ref={aboutRef} className="bg-slate-800/50 relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="slide-in-left space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-500">Who I Am</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a motivated and detail-oriented Computer Science junior at Lebanese International University,
              passionate about building innovative software solutions. With a strong foundation in multiple programming
              languages and frameworks, I thrive on solving complex problems and creating impactful applications.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My expertise spans full-stack web development, mobile app development, and machine learning. I'm always
              eager to learn new technologies and apply my skills in real-world collaborative projects that make a difference.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="fade-in space-y-4" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start space-x-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all hover:transform hover:scale-105 duration-300">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Icon className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={index} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
