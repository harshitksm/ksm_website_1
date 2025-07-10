import React from 'react';
import { PieChart, Building, Users, Shield, TrendingUp, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PieChart,
      title: 'Investment Management',
      description: 'Sophisticated portfolio construction and risk management tailored to your unique objectives and risk tolerance.',
      features: ['Custom Asset Allocation', 'Alternative Investments', 'ESG Integration', 'Tax Optimization']
    },
    {
      icon: Building,
      title: 'Trust & Estate Planning',
      description: 'Comprehensive wealth transfer strategies designed to preserve and protect your legacy across generations.',
      features: ['Estate Planning', 'Trust Administration', 'Charitable Giving', 'Family Governance']
    },
    {
      icon: Users,
      title: 'Family Office Services',
      description: 'Holistic wealth management solutions for ultra-high-net-worth families and their complex needs.',
      features: ['Concierge Services', 'Investment Office', 'Family Education', 'Next-Gen Planning']
    },
    {
      icon: Shield,
      title: 'Fiduciary Services',
      description: 'Independent fiduciary oversight and governance solutions for institutional and private clients.',
      features: ['Fiduciary Oversight', 'Risk Management', 'Compliance Solutions', 'Board Advisory']
    },
    {
      icon: TrendingUp,
      title: 'Private Markets',
      description: 'Access to exclusive private investment opportunities across real estate, private equity, and hedge funds.',
      features: ['Private Equity', 'Real Estate', 'Hedge Funds', 'Direct Investments']
    },
    {
      icon: Briefcase,
      title: 'Business Services',
      description: 'Strategic advisory services for business owners, executives, and entrepreneurs.',
      features: ['Executive Services', 'Business Valuation', 'Succession Planning', 'Liquidity Events']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Wealth Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated approach combines investment excellence with personalized service, 
            delivering sophisticated solutions for complex financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;