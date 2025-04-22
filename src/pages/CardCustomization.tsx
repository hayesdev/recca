import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardCustomization: React.FC = () => {
  const [isFront, setIsFront] = useState(true);
  const [cardColor, setCardColor] = useState('#F5F0E6');
  const [textColor, setTextColor] = useState('#2C1810');

  const colors = [
    { name: 'Cream', value: '#F5F0E6' },
    { name: 'Orange', value: '#E6A17C' },
    { name: 'Brown', value: '#8B7355' },
    { name: 'Light', value: '#FDF6E9' },
  ];

  return (
    <div className="min-h-screen bg-analog-cream py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-display mb-8">Customize Your Card</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card Preview */}
            <motion.div
              className="relative aspect-[3/4] max-w-md mx-auto"
              animate={{ rotateY: isFront ? 0 : 180 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="absolute inset-0 bg-white rounded-lg shadow-cassette p-8"
                style={{ backgroundColor: cardColor }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <h2
                        className="text-3xl font-display mb-4"
                        style={{ color: textColor }}
                      >
                        Your Mixtape
                      </h2>
                      <p
                        className="font-handwriting text-xl"
                        style={{ color: textColor }}
                      >
                        A collection of memories
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-tape-secondary rounded-full animate-tape-wind"></div>
                    <div className="w-12 h-12 bg-tape-secondary rounded-full animate-tape-wind"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Customization Options */}
            <div className="space-y-8">
              {/* Color Selection */}
              <section>
                <h2 className="text-2xl font-display mb-4">Card Color</h2>
                <div className="grid grid-cols-4 gap-4">
                  {colors.map((color) => (
                    <motion.button
                      key={color.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full aspect-square rounded-lg ${
                        cardColor === color.value
                          ? 'ring-2 ring-analog-orange'
                          : ''
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setCardColor(color.value)}
                    />
                  ))}
                </div>
              </section>

              {/* Text Color */}
              <section>
                <h2 className="text-2xl font-display mb-4">Text Color</h2>
                <div className="grid grid-cols-4 gap-4">
                  {colors.map((color) => (
                    <motion.button
                      key={color.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full aspect-square rounded-lg ${
                        textColor === color.value
                          ? 'ring-2 ring-analog-orange'
                          : ''
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setTextColor(color.value)}
                    />
                  ))}
                </div>
              </section>

              {/* QR Code Placement */}
              <section>
                <h2 className="text-2xl font-display mb-4">QR Code</h2>
                <div className="p-6 bg-white rounded-lg shadow-card">
                  <div className="aspect-square w-32 mx-auto bg-analog-light rounded-lg flex items-center justify-center">
                    <span className="text-analog-brown">QR Code</span>
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex justify-between pt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white text-analog-brown rounded-lg shadow-card hover:bg-analog-light transition-colors duration-300"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-analog-orange text-white rounded-lg shadow-card hover:bg-analog-brown transition-colors duration-300"
                >
                  Save & Continue
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardCustomization; 