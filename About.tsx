import React from 'react';
import { Award, Globe, Clock, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Unwavering commitment to delivering superior results and exceptional client service.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide presence with local expertise to serve clients across multiple jurisdictions.'
    },
    {
      icon: Clock,
      title: 'Long-term Focus',
      description: 'Patient capital approach focused on sustainable wealth creation over generations.'
    },
    {
      icon: Target,
      title: 'Client-Centric',
      description: 'Tailored solutions designed around each client\'s unique goals and circumstances.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              A Century of Trusted Stewardship
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded on the principles of integrity, innovation, and excellence, Rockefeller Capital Management 
              has been a trusted partner to families, institutions, and entrepreneurs for over a century.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our heritage is built on a foundation of fiduciary responsibility and a deep understanding 
              of the complexities that come with significant wealth. We combine time-tested investment 
              principles with innovative strategies to deliver comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Our History
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                Leadership Team
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;