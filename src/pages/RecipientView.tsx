import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RecipientView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    { title: 'Track 1', artist: 'Artist 1' },
    { title: 'Track 2', artist: 'Artist 2' },
    { title: 'Track 3', artist: 'Artist 3' },
  ];

  const photos = [
    { id: 1, url: '/photos/1.jpg' },
    { id: 2, url: '/photos/2.jpg' },
    { id: 3, url: '/photos/3.jpg' },
  ];

  return (
    <div className="min-h-screen bg-analog-cream py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display mb-4">Your Mixtape</h1>
            <p className="text-xl text-analog-brown">A special collection for you</p>
          </div>

          {/* Cassette Player */}
          <motion.div
            className="bg-white rounded-lg shadow-cassette p-8 mb-12"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-tape-secondary rounded-full animate-tape-wind"></div>
              <div className="text-center">
                <h2 className="text-2xl font-display">{tracks[currentTrack].title}</h2>
                <p className="text-analog-brown">{tracks[currentTrack].artist}</p>
              </div>
              <div className="w-16 h-16 bg-tape-secondary rounded-full animate-tape-wind"></div>
            </div>

            {/* Player Controls */}
            <div className="flex justify-center space-x-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-4xl text-analog-brown"
                onClick={() => setCurrentTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1))}
              >
                ⏮
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-6xl text-analog-orange"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸' : '▶'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-4xl text-analog-brown"
                onClick={() => setCurrentTrack((prev) => (prev < tracks.length - 1 ? prev + 1 : 0))}
              >
                ⏭
              </motion.button>
            </div>

            {/* Tape Hiss Effect */}
            {isPlaying && (
              <motion.div
                className="h-1 bg-analog-light rounded-full mt-8"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Photo Gallery */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-6">Memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square bg-analog-light rounded-lg shadow-card overflow-hidden"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-analog-brown">Photo {photo.id}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Message */}
          <section className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-display mb-4">A Message For You</h2>
            <p className="font-handwriting text-xl text-analog-brown">
              "This mixtape is a collection of moments that remind me of you. 
              Each song, each photo, each memory is a piece of our story. 
              I hope it brings you as much joy as it brings me to share it with you."
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipientView; 