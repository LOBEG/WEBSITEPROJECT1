import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Search, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';

const Home = () => {
  const [clientCount, setClientCount] = useState(0);
  const [assetsCount, setAssetsCount] = useState(0);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    const baseClientCount = 895;
    const startDate = new Date('2024-01-01');
    const currentDate = new Date();
    const daysDifference = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalClientCount = baseClientCount; // fixed now

    const baseAssetsCount = 2500;
    const assetsDailyIncrement = daysDifference * 50;
    const totalAssetsCount = baseAssetsCount + assetsDailyIncrement;

    let currentClient = 0;
    const clientStep = Math.ceil(totalClientCount / 100);
    const clientTimer = setInterval(() => {
      currentClient += clientStep;
      if (currentClient >= totalClientCount) {
        currentClient = totalClientCount;
        clearInterval(clientTimer);
      }
      setClientCount(currentClient);
    }, 30);

    let currentAssets = 0;
    const assetsStep = Math.ceil(totalAssetsCount / 100);
    const assetsTimer = setInterval(() => {
      currentAssets += assetsStep;
      if (currentAssets >= totalAssetsCount) {
        currentAssets = totalAssetsCount;
        clearInterval(assetsTimer);
      }
      setAssetsCount(currentAssets);
    }, 30);

    return () => {
      clearInterval(clientTimer);
      clearInterval(assetsTimer);
    };
  }, []);

  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Phone Monitoring & Tracking',
      description: 'Advanced surveillance and tracking solutions for personal and corporate security.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'iCloud Unlock & Recovery',
      description: 'Professional iCloud unlocking and data recovery services with guaranteed results.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Digital Forensics',
      description: 'Expert forensic investigation services for legal and corporate requirements.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cryptocurrency Recovery',
      description: 'Specialized recovery services for lost Bitcoin and cryptocurrency assets.'
    }
  ];

  const stats = [
    { number: `${clientCount.toLocaleString()}+`, label: 'Happy Clients' },
    { number: `${assetsCount.toLocaleString()}+`, label: 'Assets Recovered' },
    { number: '99.8%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section remains unchanged with its own overlays for dramatic effect */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1422168292/photo/abstract-dark-web-text-over-hacker-holding-and-using-laptop-on-blurry-background-hacking-and.jpg?s=612x612&w=0&k=20&c=JHoQARBFUmt94te1rQPnQ2va0YuJmROHGTxOseOO3fo=')] bg-cover bg-center opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Invisible Trace
                <span className="block text-cyan-400">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional cybersecurity experts providing cutting-edge digital forensics, data recovery, and security
                solutions. Your digital safety is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-cyan-400/20">
                <div className="flex items-center mb-6">
                  <Shield className="w-12 h-12 text-cyan-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Secure & Confidential</h3>
                    <p className="text-gray-400">100% Privacy Guaranteed</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Licensed Cybersecurity Professionals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 Emergency Response</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Guaranteed Results</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section – Our Track Record (overlay removed) */}
      <section
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Our Track Record</h2>
            <p className="text-cyan-100 drop-shadow">Trusted by clients worldwide for exceptional results</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview – Our Core Services (overlay removed) */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1144604245/photo/a-computer-system-hacked-warning.jpg?s=612x612&w=0&k=20&c=U45FHOm5rflXIRqmYByxlQANtdtycEdFZz2Vp5dgI8E=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Our Core Services</h2>
            <p className="text-xl text-white drop-shadow max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect and recover your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="text-cyan-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 font-medium leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section – Ready to Secure Your Digital Assets? (overlay removed) */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/531478518/photo/dangerous-hacker-stealing-data-concept.jpg?s=612x612&w=0&k=20&c=FOOkogmrFB4dwzeVP7DfCdr0z60Icsg28mmn041s_vw=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Ready to Secure Your Digital Assets?</h2>
          <p className="text-xl text-white drop-shadow mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Contact our cybersecurity experts today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+17134281255"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call Now: (713) 428-1255
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-cyan-400/30">
            <button onClick={() => setShowPrivacyModal(true)} className="text-cyan-100 hover:text-white underline transition-colors duration-300">
              Privacy Policy
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Policy Modal remains unchanged */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                <button onClick={() => setShowPrivacyModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              {/* ...existing policy content... */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;