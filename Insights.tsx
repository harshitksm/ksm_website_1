import React from 'react';
import { Calendar, ArrowRight, TrendingUp, FileText, Video } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      type: 'Market Outlook',
      title: 'Global Economic Perspectives: Q1 2024',
      excerpt: 'Our chief investment officer shares insights on market trends, geopolitical risks, and investment opportunities for the coming quarter.',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp
    },
    {
      type: 'White Paper',
      title: 'Estate Planning in a Changing Tax Environment',
      excerpt: 'Navigate the complexities of estate planning with our comprehensive guide to tax-efficient wealth transfer strategies.',
      date: 'March 10, 2024',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: FileText
    },
    {
      type: 'Video',
      title: 'Sustainable Investing: Beyond ESG',
      excerpt: 'Explore how sustainable investing has evolved and what it means for portfolio construction in the modern era.',
      date: 'March 5, 2024',
      readTime: '15 min watch',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Video
    },
    {
      type: 'Research',
      title: 'Alternative Investments: Private Markets Deep Dive',
      excerpt: 'An in-depth analysis of private market opportunities and their role in diversified portfolio construction.',
      date: 'February 28, 2024',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp
    },
    {
      type: 'Commentary',
      title: 'Family Wealth Governance: Best Practices',
      excerpt: 'Essential frameworks for establishing effective governance structures in multi-generational family wealth.',
      date: 'February 20, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: FileText
    },
    {
      type: 'Market Update',
      title: 'Fed Policy and Portfolio Positioning',
      excerpt: 'How recent Federal Reserve decisions impact investment strategy and portfolio positioning across asset classes.',
      date: 'February 15, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Insights & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest market insights, research reports, and thought leadership 
            from our team of investment professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <insight.icon className="w-4 h-4 mr-1" />
                    {insight.type}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {insight.date}
                  </div>
                  <span>{insight.readTime}</span>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;