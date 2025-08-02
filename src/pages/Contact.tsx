import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Calendar,
  Shield
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Phone Monitoring & Tracking",
    "iCloud Unlock & Recovery", 
    "Data Recovery (Photos/Messages)",
    "Digital Forensics Investigation",
    "Bitcoin/Cryptocurrency Recovery",
    "Credit Card Debt Solutions",
    "Data Recovery & Restoration",
    "Call Tracking Services",
    "Other - Please Specify"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (713) 428-1255",
      link: "tel:+17134281255"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@invisibletrace.tech",
      link: "mailto:info@invisibletrace.tech"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "6525 Marvin Brown St, Fort Worth, Texas 76179",
      link: "https://maps.google.com/?q=6525+Marvin+Brown+St,+Fort+Worth,+Texas+76179"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "24/7 Emergency Support Available",
      link: null
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Contact Our Experts</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get professional cybersecurity assistance. Our team is ready to help you 24/7 with your digital security needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="normal">Normal (24-48 hours)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="emergency">Emergency (Immediate)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Please describe your situation and what help you need..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Reach out to our cybersecurity experts through any of the following channels. 
                  We're available 24/7 for emergency situations.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-cyan-600 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-cyan-600 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4 pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                
                <a
                  href="tel:+17134281255"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now: (713) 428-1255
                </a>
                
                <a
                  href="https://wa.me/17134281255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <FaWhatsapp className="w-5 h-5 mr-3" />
                  WhatsApp Chat
                </a>
                
                <a
                  href="mailto:info@invisibletrace.tech"
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </a>
              </div>

              {/* Security Notice */}
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-900 mb-2">Security & Privacy</h4>
                    <p className="text-cyan-800 text-sm">
                      All communications are encrypted and confidential. We never share client information 
                      and maintain the highest standards of privacy and security.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you respond to emergency cases?",
                answer: "We offer 24/7 emergency response and can typically respond within 1-2 hours for critical situations."
              },
              {
                question: "Is my information kept confidential?",
                answer: "Absolutely. We maintain strict confidentiality and use encrypted communications for all client interactions."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and cryptocurrency payments for your convenience."
              },
              {
                question: "Do you provide services internationally?",
                answer: "Yes, we provide remote cybersecurity services to clients worldwide, with local support in major cities."
              },
              {
                question: "How much do your services cost?",
                answer: "Pricing varies by service complexity. We offer free consultations and provide detailed quotes before starting any work."
              },
              {
                question: "What if you can't recover my data/funds?",
                answer: "We operate on a 'no results, no payment' basis for most recovery services. You only pay when we deliver results."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;