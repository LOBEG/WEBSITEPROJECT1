import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Lock, Search, DollarSign, Shield, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Phone Monitoring & Tracking",
      description: "Advanced surveillance and tracking solutions for personal and corporate security needs.",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Real-time GPS location tracking",
        "Call and message monitoring",
        "Social media surveillance",
        "Remote device access",
        "Stealth mode operation"
      ],
      price: "Starting at $269"
    },
    {
      title: "iCloud Unlock & Recovery",
      description: "Professional iCloud unlocking and comprehensive data recovery services.",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "iCloud account recovery",
        "Device unlock services",
        "Photo and document recovery",
        "Backup restoration",
        "Privacy protection"
      ],
      price: "Starting at $220"
    },
    {
      title: "Digital Forensics",
      description: "Expert forensic investigation services for legal and corporate requirements.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Evidence collection and preservation",
        "Computer and mobile forensics",
        "Network traffic analysis",
        "Expert witness testimony",
        "Legal documentation"
      ],
      price: "Starting at $789"
    },
    {
      title: "Cryptocurrency Recovery",
      description: "Specialized recovery services for lost Bitcoin and cryptocurrency assets.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Wallet recovery and restoration",
        "Private key reconstruction",
        "Exchange investigation",
        "Scam fund recovery",
        "Blockchain analysis"
      ],
      price: "Starting at $2,956"
    },
    {
      title: "Data Recovery",
      description: "Professional data recovery for deleted photos, messages, and important files.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Deleted file recovery",
        "Hard drive restoration",
        "Mobile device data recovery",
        "Cloud data retrieval",
        "Emergency recovery services"
      ],
      price: "Starting at $650"
    },
    {
      title: "Credit Card Solutions",
      description: "Debt resolution and financial recovery assistance services.",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Debt negotiation services",
        "Credit repair assistance",
        "Financial fraud investigation",
        "Payment plan setup",
        "Legal representation"
      ],
      price: "Starting at $1300"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/641382150/photo/stealing-personal-data-through-a-laptop-concept.jpg?s=612x612&w=0&k=20&c=QlAjS3udylo3yOkDnCdSp3f_I22zaHB4wnkKRTPqXfE=')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Cybersecurity Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital security solutions from certified cybersecurity experts. 
              Protecting and recovering your digital assets with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1440356809/photo/artificial-intelligence-technology-robot-futuristic-data-science-data-analytics-quantum.jpg?s=612x612&w=0&k=20&c=rmkxBaRiWay0ghLSP91Zhei6NQWfaKSRv3zlzF-2BDs=')"
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center mb-16">
            <h2 className="text-4xl font-bold drop-shadow-lg mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-100 drop-shadow">Professional cybersecurity solutions tailored to your specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/70 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-cyan-600 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/847519080/photo/woman-engineer-looking-at-various-information-in-screen-of-futuristic-interface.jpg?s=612x612&w=0&k=20&c=BwGgZid6lHpi6fgBLR3LCPw9MYWnNXWCVj2dg7QHa8I=')"
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center mb-16">
            <h2 className="text-4xl font-bold drop-shadow-lg mb-4">Our Process</h2>
            <p className="text-xl text-gray-100 drop-shadow">A systematic approach to cybersecurity that delivers results</p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free initial assessment of your needs" },
              { step: "02", title: "Analysis", desc: "Detailed investigation and planning" },
              { step: "03", title: "Execution", desc: "Professional service implementation" },
              { step: "04", title: "Delivery", desc: "Results delivery and ongoing support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-800/70 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 hover:bg-gray-800/90 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1592504426/photo/close-up-programmer-man-hand-type-on-laptop-to-access-on-privacy-account-system-to-hacking-or.jpg?s=612x612&w=0&k=20&c=EVonj3rNSgXxsS6JtAqm8LbKPTooxHTwTcJbcL3f988=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
            Ready to Secure Your Digital Assets?
          </h2>
          <p className="text-xl text-gray-100 drop-shadow mb-8 max-w-2xl mx-auto">
            Contact our cybersecurity experts today for a free consultation and custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+17134281255"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Call Now: (713) 428-1255
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;