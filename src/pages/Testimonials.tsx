import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
// Add these imports for icons
import { FaDatabase, FaBitcoin, FaSearchDollar, FaUserSecret } from 'react-icons/fa';

const Testimonials = () => {
  // Rolling counters logic
  const [clientCount, setClientCount] = useState(0);
  const [assetsCount, setAssetsCount] = useState(0);

  useEffect(() => {
    const baseClients = 895;
    const baseAssets = 31450;
    const dailyInc = 20;

    const startDate = new Date('2025-08-03T00:00:00Z').getTime();
    const today = Date.now();
    const days =
      Math.floor((today - startDate) / 86_400_000) > 0
        ? Math.floor((today - startDate) / 86_400_000)
        : 0;

    const targetClients = baseClients + days * dailyInc;
    const targetAssets = baseAssets + days * dailyInc;

    const animate = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number
    ) => {
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 120));
      const id = setInterval(() => {
        cur += step;
        if (cur >= target) {
          cur = target;
          clearInterval(id);
        }
        setter(cur);
      }, 16);
    };

    animate(setClientCount, targetClients);
    animate(setAssetsCount, targetAssets);
  }, []);

  // Testimonials data
  const testimonials = [
    // ... (your original array of 9 testimonials)
    {
      name: 'Douglas Cassavar Sr',
      location: 'New York, USA',
      image:
        'https://i.postimg.cc/qvwtMykb/Whats-App-Image-2025-08-03-at-15-32-56-2d7e0419.jpg',
      rating: 5,
      quote:
        'Invisible Trace Technology recovered my lost Bitcoin worth $250,000. Their expertise and professionalism exceeded all expectations. Highly recommended!',
      service: 'Cryptocurrency Recovery',
    },
    {
      name: 'Mary Helen',
      location: 'Toronto, Canada',
      image:
        'https://i.postimg.cc/65w52qbD/Whats-App-Image-2025-08-03-at-15-35-06-e89cfed4.jpg',
      rating: 5,
      quote:
        "They helped me unlock my deceased husband's iPhone and recover precious family photos. The team was compassionate and incredibly skilled.",
      service: 'Data Recovery & Device Unlock',
    },
    {
      name: 'Joe Web',
      location: 'Sydney, Australia',
      image:
        'https://i.postimg.cc/QNqZzbSy/Whats-App-Image-2025-08-03-at-15-47-51-d8414a14.jpg',
      rating: 5,
      quote:
        'Outstanding forensic investigation services. They provided crucial evidence for our legal case with detailed documentation and expert testimony.',
      service: 'Digital Forensics',
    },
    {
      name: 'Elvira Zane',
      location: 'London, United Kingdom',
      image:
        'https://i.postimg.cc/ZKq2MhWW/Whats-App-Image-2025-08-03-at-15-50-02-3ea0b22f.jpg',
      rating: 5,
      quote:
        'Professional phone monitoring service helped protect my teenage daughter. The discrete tracking gave me peace of mind as a concerned parent.',
      service: 'Phone Monitoring',
    },
    {
      name: 'Pierre Dubois',
      location: 'Paris, France',
      image:
        'https://i.postimg.cc/C5rPgzRz/Whats-App-Image-2025-08-03-at-15-52-24-0fd25d1a.jpg',
      rating: 5,
      quote:
        'Excellent iCloud recovery service. They restored all my business data after I forgot my credentials. Fast, reliable, and completely confidential.',
      service: 'iCloud Recovery',
    },
    {
      name: 'Hans Mueller',
      location: 'Berlin, Germany',
      image:
        'https://i.postimg.cc/jdGc4VP0/Whats-App-Image-2025-08-03-at-15-53-52-9af3de48.jpg',
      rating: 5,
      quote:
        'Their cryptocurrency recovery expertise is unmatched. They recovered funds from a scam exchange when I thought all hope was lost. Truly amazing!',
      service: 'Cryptocurrency Recovery',
    },
    {
      name: 'Lisa Chen',
      location: 'Vancouver, Canada',
      image:
        'https://i.postimg.cc/5yX58pt2/Whats-App-Image-2025-08-03-at-15-55-59-f600536f.jpg',
      rating: 5,
      quote:
        'Credit-card debt solution service was life-changing. They negotiated with creditors and helped me get back on track financially.',
      service: 'Financial Recovery',
    },
    {
      name: 'Robert Davis',
      location: 'Melbourne, Australia',
      image:
        'https://i.postimg.cc/BZjwTBkF/Whats-App-Image-2025-08-03-at-15-57-05-051054a0.jpg',
      rating: 5,
      quote:
        'Data-recovery service saved my business. They recovered critical files from a corrupted hard drive. Their technical expertise is outstanding.',
      service: 'Data Recovery',
    },
    {
      name: 'Sophie Laurent',
      location: 'Lyon, France',
      image:
        'https://i.postimg.cc/YSSxppwF/Whats-App-Image-2025-08-03-at-15-58-33-6964d196.jpg',
      rating: 5,
      quote:
        'Call-tracking service helped identify harassment calls. The detailed reports provided crucial evidence for legal action.',
      service: 'Call Tracking',
    },
  ];

  // Stats array
  const stats = [
    {
      number: `${clientCount.toLocaleString()}+`,
      label: 'Happy Clients Worldwide',
    },
    {
      number: `${assetsCount.toLocaleString()}+`,
      label: 'Assets Successfully Recovered',
    },
    { number: '99.8%', label: 'Client Satisfaction Rate' },
    { number: '24/7', label: 'Emergency Support Available' },
  ];

  // Floating icons for Trusted Worldwide section
  const trustedIcons = [
    { icon: <FaDatabase />, label: 'Data Recovery' },
    { icon: <FaBitcoin />, label: 'Crypto Recovery' },
    { icon: <FaSearchDollar />, label: 'Tracking' },
    { icon: <FaUserSecret />, label: 'Digital Forensics' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1183989185/vector/vector-abstract-security-system-concept-with-fingerprint-on-technology-background.jpg?s=612x612&w=0&k=20&c=jJF1ryfKmLR0z5DDL6TS8PEQHvDGJ7gTP7EfufGkJtg=')",
        }}
      >
        <span className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold drop-shadow-lg mb-6"
          >
            Client Success Stories
          </motion.h1>
          <p className="text-xl text-gray-100 drop-shadow max-w-3xl mx-auto">
            Real testimonials from satisfied clients worldwide who trusted us
            with their cybersecurity needs.
          </p>
        </div>
      </section>

      {/* Rolling Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-600 mb-2">
                  {s.number}
                </div>
                <div className="text-gray-600 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1692137254/photo/cyber-security-data-protection-information-from-system-hacked-warning-alert-cyber-attack-on.jpg?s=612x612&w=0&k=20&c=jSOifx-paRpEdxUKHmetemdCvAaXn_qEAeuJiy6dQVA=')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold drop-shadow-lg mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-100 drop-shadow">
              Testimonials from clients across USA, Canada, Australia, Germany,
              France & United Kingdom
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-800/70 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-cyan-400/50"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {t.name}
                    </h3>
                    <p className="text-gray-200 text-sm">{t.location}</p>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-cyan-200 absolute -top-2 -left-2" />
                  <p className="text-gray-100 italic mb-4 pl-6">"{t.quote}"</p>
                </div>
                <div className="border-t pt-4 text-cyan-400 text-sm font-medium">
                  {t.service}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Overview Section */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2154372302/video/multiethnic-programmer-team-in-server-farm-workspace-surprised-by-hacking-attack.jpg?s=640x640&k=20&c=niNkF5dzMARHWH9otrOZ0A9ZlE6_W5O3ObfSSHyrfLU=')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                color: '#fff',
                textShadow: '0 2px 8px #000, 0 0px 1px #000'
              }}
            >
              Operations Overview
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bitcoin Recovery Video - LOCAL, NO POSTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col bg-transparent"
            >
              <div className="aspect-video flex items-center justify-center bg-transparent">
                <video
                  controls
                  className="w-full h-full rounded-t-2xl"
                  preload="metadata"
                  style={{ background: "transparent" }}
                >
                  <source src="/videos/bitcoin-recovery.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 text-white text-center flex-1 flex flex-col justify-center bg-transparent">
                <h3 className="text-lg font-semibold mb-1" style={{textShadow: '0 1px 6px #000'}}>Bitcoin Recovery</h3>
                <p className="text-sm text-gray-300" style={{textShadow: '0 1px 6px #000'}}>See how we recovered lost cryptocurrency for our client.</p>
              </div>
            </motion.div>

            {/* Data Recovery Video - LOCAL, NO POSTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col bg-transparent"
            >
              <div className="aspect-video flex items-center justify-center bg-transparent">
                <video
                  controls
                  className="w-full h-full rounded-t-2xl"
                  preload="metadata"
                  style={{ background: "transparent" }}
                >
                  <source src="/videos/data-recovery.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 text-white text-center flex-1 flex flex-col justify-center bg-transparent">
                <h3 className="text-lg font-semibold mb-1" style={{textShadow: '0 1px 6px #000'}}>Data Recovery</h3>
                <p className="text-sm text-gray-300" style={{textShadow: '0 1px 6px #000'}}>Watch our experts recover and restore lost data for a client.</p>
              </div>
            </motion.div>

            {/* Digital Forensics Video - LOCAL, NO POSTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col bg-transparent"
            >
              <div className="aspect-video flex items-center justify-center bg-transparent">
                <video
                  controls
                  className="w-full h-full rounded-t-2xl"
                  preload="metadata"
                  style={{ background: "transparent" }}
                >
                  <source src="/videos/digital-forensics.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 text-white text-center flex-1 flex flex-col justify-center bg-transparent">
                <h3 className="text-lg font-semibold mb-1" style={{textShadow: '0 1px 6px #000'}}>Digital Forensics</h3>
                <p className="text-sm text-gray-300" style={{textShadow: '0 1px 6px #000'}}>Discover how we uncover digital evidence for legal cases.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Worldwide - now with floating icons */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1498925586/photo/scary-faceless-man-in-a-hoodie-under-neon-lights.jpg?s=612x612&w=0&k=20&c=FJrcLyjxkh601GgZenP3xJ3LdRHHhCQTVyMF3axL6Sc=')",
        }}
      >
        <span className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Trusted Worldwide</h2>
            <p className="text-xl text-gray-200 drop-shadow-lg">
              Clients from over 50 countries trust our cybersecurity expertise
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 mt-10 mb-10">
            {trustedIcons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="bg-gray-900/80 rounded-full shadow-lg p-8 flex items-center justify-center">
                  <span
                    className={
                      i === 0
                        ? 'text-cyan-300'
                        : i === 1
                        ? 'text-yellow-300'
                        : i === 2
                        ? 'text-green-300'
                        : 'text-purple-300'
                    }
                    style={{ fontSize: '3rem' }}
                  >
                    {item.icon}
                  </span>
                </div>
                <span className="mt-4 text-white font-semibold text-lg drop-shadow text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1498925586/photo/scary-faceless-man-in-a-hoodie-under-neon-lights.jpg?s=612x612&w=0&k=20&c=FJrcLyjxkh601GgZenP3xJ3LdRHHhCQTVyMF3axL6Sc=')",
        }}
      >
        <span className="absolute inset-0 bg-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Experience the same professional service and successful results
            trusted by clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 drop-shadow"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+17134281255"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 drop-shadow"
            >
              Call Now: (713) 428-1255
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;