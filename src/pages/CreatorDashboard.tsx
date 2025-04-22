import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CreatorDashboard: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('blank');
  const [storageUsed, setStorageUsed] = useState<number>(0.5); // GB

  const templates = [
    { id: 'blank', name: 'Blank Canvas', image: '/templates/blank.png' },
    { id: 'vintage', name: 'Vintage Mixtape', image: '/templates/vintage.png' },
    { id: 'modern', name: 'Modern Minimal', image: '/templates/modern.png' },
  ];

  return (
    <div className="min-h-screen bg-analog-cream py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-display mb-8">Create Your Recc Card</h1>

          {/* Template Selection */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-6">Choose a Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg cursor-pointer ${
                    selectedTemplate === template.id
                      ? 'bg-analog-orange text-white'
                      : 'bg-white shadow-card'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-analog-light rounded"></div>
                  <h3 className="text-lg font-display">{template.name}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Media Upload Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-6">Add Your Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-6 bg-white rounded-lg shadow-card"
              >
                <h3 className="text-xl font-display mb-4">Music</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Spotify Playlist URL"
                    className="w-full p-3 border border-analog-light rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Apple Music Playlist URL"
                    className="w-full p-3 border border-analog-light rounded-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-6 bg-white rounded-lg shadow-card"
              >
                <h3 className="text-xl font-display mb-4">Photos & Artwork</h3>
                <div className="border-2 border-dashed border-analog-light rounded-lg p-8 text-center">
                  <p className="text-analog-brown">Drag and drop your images here</p>
                  <p className="text-sm text-analog-brown mt-2">or click to browse</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Storage Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-analog-brown">Storage Used</span>
              <span className="text-analog-brown">{storageUsed}GB / 2GB</span>
            </div>
            <div className="w-full h-2 bg-analog-light rounded-full">
              <motion.div
                className="h-full bg-analog-orange rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(storageUsed / 2) * 100}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Link
              to="/"
              className="px-6 py-3 bg-white text-analog-brown rounded-lg shadow-card hover:bg-analog-light transition-colors duration-300"
            >
              Back
            </Link>
            <Link
              to="/customize"
              className="px-6 py-3 bg-analog-orange text-white rounded-lg shadow-card hover:bg-analog-brown transition-colors duration-300"
            >
              Continue to Customization
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreatorDashboard; 