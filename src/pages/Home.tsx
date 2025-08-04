import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Lock, Search, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';

// Custom Tech Icon component matching the favicon design
const TechIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#87CEEB", stopOpacity:0.9}} />
        <stop offset="25%" style={{stopColor:"#B0E0E6", stopOpacity:0.8}} />
        <stop offset="50%" style={{stopColor:"#E0F6FF", stopOpacity:0.7}} />
        <stop offset="75%" style={{stopColor:"#B0E0E6", stopOpacity:0.8}} />
        <stop offset="100%" style={{stopColor:"#4682B4", stopOpacity:0.9}} />
      </linearGradient>
    </defs>
    
    {/* Glass background circle */}
    <circle cx="64" cy="64" r="58" fill="url(#glassGradient)" opacity="0.95"/>
    
    {/* Main logo design - Tech/Invisible theme */}
    <g transform="translate(64,64)">
      {/* Central tech circle */}
      <circle cx="0" cy="0" r="24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.9"/>
      
      {/* Tech lines radiating outward */}
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.8">
        <line x1="0" y1="-35" x2="0" y2="-28" />
        <line x1="25" y1="-25" x2="20" y2="-20" />
        <line x1="35" y1="0" x2="28" y2="0" />
        <line x1="25" y1="25" x2="20" y2="20" />
        <line x1="0" y1="35" x2="0" y2="28" />
        <line x1="-25" y1="25" x2="-20" y2="20" />
        <line x1="-35" y1="0" x2="-28" y2="0" />
        <line x1="-25" y1="-25" x2="-20" y2="-20" />
      </g>
      
      {/* Inner tech pattern */}
      <g fill="currentColor" opacity="0.7">
        <circle cx="0" cy="0" r="3"/>
        <circle cx="0" cy="-12" r="1.5"/>
        <circle cx="12" cy="0" r="1.5"/>
        <circle cx="0" cy="12" r="1.5"/>
        <circle cx="-12" cy="0" r="1.5"/>
      </g>
      
      {/* Invisible trace elements */}
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6">
        <path d="M -15,-8 Q -10,-12 -5,-8 Q 0,-4 5,-8 Q 10,-12 15,-8" strokeDasharray="2,2"/>
        <path d="M -15,8 Q -10,12 -5,8 Q 0,4 5,8 Q 10,12 15,8" strokeDasharray="2,2"/>
      </g>
    </g>
  </svg>
);

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
    const clientStep = Math.ceil(totalClientCount / 50); // Reduced steps for better mobile performance
    const clientTimer = setInterval(() => {
      currentClient += clientStep;
      if (currentClient >= totalClientCount) {
        currentClient = totalClientCount;
        clearInterval(clientTimer);
      }
      setClientCount(currentClient);
    }, 50); // Slightly slower for mobile performance

    let currentAssets = 0;
    const assetsStep = Math.ceil(totalAssetsCount / 50); // Reduced steps for better mobile performance
    const assetsTimer = setInterval(() => {
      currentAssets += assetsStep;
      if (currentAssets >= totalAssetsCount) {
        currentAssets = totalAssetsCount;
        clearInterval(assetsTimer);
      }
      setAssetsCount(currentAssets);
    }, 50); // Slightly slower for mobile performance

    return () => {
      clearInterval(clientTimer);
      clearInterval(assetsTimer);
    };
  }, []);

  const services = [
    {
      icon: TechIcon,
      title: "Cybersecurity Consulting",
      description: "Comprehensive security assessments and strategic recommendations to protect your digital infrastructure."
    },
    {
      icon: Search,
      title: "Digital Forensics",
      description: "Expert investigation and analysis of digital evidence for legal proceedings and security incidents."
    },
    {
      icon: DollarSign,
      title: "Cryptocurrency Recovery",
      description: "Specialized recovery services for lost or stolen cryptocurrency assets using advanced blockchain analysis."
    },
    {
      icon: Eye,
      title: "Phone Monitoring",
      description: "Discreet and legal monitoring solutions for parental control and employee oversight."
    }
  ];

  const stats = [
    { number: `${clientCount.toLocaleString()}+`, label: "Satisfied Clients" },
    { number: `$${assetsCount.toLocaleString()}M+`, label: "Assets Recovered" },
    { number: "24/7", label: "Support Available" },
    { number: "99.9%", label: "Success Rate" }
  ];

  return (
    <div className="relative">
      {/* Hero Section with optimized background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata" // Optimized loading
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          >
            <source src="/videos/cybersecurity-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Protect Your Digital</span>
              <span className="block text-cyan-400 mt-2">Future Today</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Expert cybersecurity services, digital forensics, and data recovery solutions 
              to safeguard your business and personal assets in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-8">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get Expert Help
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section – Our Track Record with optimized background */}
      <section
        className="relative py-12 sm:py-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800')", // Optimized image size
          backgroundAttachment: 'scroll' // Better mobile performance
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg mb-4">Our Track Record</h2>
            <p className="text-cyan-100 drop-shadow text-sm sm:text-base">Trusted by clients worldwide for exceptional results</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Optimize for mobile
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview – Our Core Services with optimized background */}
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1144604245/photo/a-computer-system-hacked-warning.jpg?s=640x640&w=0&k=20&c=U45FHOm5rflXIRqmYByxlQANtdtycEdFZz2Vp5dgI8E=')", // Optimized image size
          backgroundAttachment: 'scroll' // Better mobile performance
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-4">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-white drop-shadow max-w-3xl mx-auto px-4">
              Comprehensive cybersecurity solutions tailored to protect and recover your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Optimize for mobile
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 sm:p-4 bg-cyan-600/20 rounded-full group-hover:bg-cyan-600/30 transition-colors duration-300">
                    {service.icon === TechIcon ? (
                      <TechIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                    ) : (
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/services"
              className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with optimized spacing */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Invisible Trace Tech?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading expertise with a proven track record of success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: TechIcon,
                title: "Expert Team",
                description: "Certified professionals with years of experience in cybersecurity and digital forensics"
              },
              {
                icon: Lock,
                title: "Confidential & Secure",
                description: "Your privacy and data security are our top priorities with military-grade encryption"
              },
              {
                icon: CheckCircle,
                title: "Proven Results",
                description: "99.9% success rate with over $2.5B in recovered assets for our clients"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Optimize for mobile
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 sm:p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-cyan-600/20 rounded-full mb-6">
                  {feature.icon === TechIcon ? (
                    <TechIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                  ) : (
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with better mobile spacing */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Optimize for mobile
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-lg sm:text-xl text-cyan-100 max-w-2xl mx-auto">
              Don't wait until it's too late. Contact our experts today for a free consultation 
              and discover how we can protect your valuable digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-8">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-cyan-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+17134281255"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Call: (713) 428-1255
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Privacy Notice</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              We value your privacy and are committed to protecting your personal information. 
              This website uses cookies to enhance your browsing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-full sm:w-auto bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-full sm:w-auto border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;