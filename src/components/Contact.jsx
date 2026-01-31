import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const contactRef = useRef(null);

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

    const elements = contactRef.current?.querySelectorAll('.fade-in, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'majd_fayyad@icloud.com',
      href: 'mailto:majd_fayyad@icloud.com',
      color: 'emerald',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+961 76 498 957',
      href: 'tel:+96176498957',
      color: 'blue',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hasbaya, El-Janoub, Lebanon',
      color: 'purple',
    },
  ];

  return (
    <section id="contact" ref={contactRef} className="bg-slate-800/50 relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const content = (
                  <div
                    className="scale-in hover-lift flex items-center space-x-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="p-4 bg-emerald-500/10 rounded-lg">
                      <Icon className="text-emerald-500" size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{method.label}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </div>
                );

                return method.href ? (
                  <a key={index} href={method.href}>
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Majd Fayyad"
                  required
                  className="w-full bg-slate-900 border-slate-700 focus:border-emerald-500 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="majd@example.com"
                  required
                  className="w-full bg-slate-900 border-slate-700 focus:border-emerald-500 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  required
                  className="w-full bg-slate-900 border-slate-700 focus:border-emerald-500 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full bg-slate-900 border-slate-700 focus:border-emerald-500 text-white placeholder:text-slate-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
