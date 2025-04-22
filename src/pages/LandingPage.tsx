import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-analog-cream to-analog-orange opacity-50"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl text-analog-dark mb-6"
          >
            Recc Card
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-analog-brown mb-12 max-w-2xl mx-auto"
          >
            A Modern Mixtape Experience
          </motion.p>

          {/* Cassette Tape Animation */}
          <motion.div 
            className="relative w-64 h-40 mx-auto mb-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-tape-primary rounded-lg shadow-cassette">
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-tape-secondary rounded-full animate-tape-wind"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-tape-secondary rounded-full animate-tape-wind"></div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link 
              to="/create"
              className="px-8 py-4 bg-analog-orange text-white rounded-lg shadow-card hover:bg-analog-brown transition-colors duration-300"
            >
              Create Your Recc Card
            </Link>
            <Link 
              to="/view"
              className="px-8 py-4 bg-white text-analog-brown rounded-lg shadow-card hover:bg-analog-light transition-colors duration-300"
            >
              Redeem a Recc Card
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-analog-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Create",
                description: "Curate your perfect mixtape with music, photos, and messages"
              },
              {
                title: "Customize",
                description: "Design your physical card with our nostalgic templates"
              },
              {
                title: "Share",
                description: "Send your Recc Card and let the magic unfold"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-card"
              >
                <h3 className="text-2xl font-display mb-4">{feature.title}</h3>
                <p className="text-analog-brown">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 