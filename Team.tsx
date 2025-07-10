import React from 'react';
import { LinkedinIcon, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Gregory J. Fleming',
      role: 'Chairman & Chief Executive Officer',
      bio: 'Former President of Morgan Stanley Wealth Management with over 25 years of experience in wealth management and investment banking.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Kristin A. Kear',
      role: 'Chief Financial Officer',
      bio: 'Former CFO of Neuberger Berman with extensive experience in financial services and strategic planning.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James L. Johnson',
      role: 'Chief Investment Officer',
      bio: 'Former Head of Asset Management at Goldman Sachs with 20+ years in investment management and portfolio strategy.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah M. Chen',
      role: 'Head of Private Wealth',
      bio: 'Former Managing Director at UBS with expertise in ultra-high-net-worth client services and family office solutions.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael R. Thompson',
      role: 'Head of Fiduciary Services',
      bio: 'Former Partner at Bessemer Trust with deep experience in trust and estate planning for complex family structures.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Lisa K. Martinez',
      role: 'Chief Operating Officer',
      bio: 'Former COO of Northern Trust with expertise in operations, technology, and client service delivery.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings together decades of expertise in wealth management, 
            investment strategy, and client service excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;