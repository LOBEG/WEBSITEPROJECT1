import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, X, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Security",
      price: "$520",
      period: "per service",
      description: "Essential cybersecurity services for individuals",
      features: [
        "Basic data recovery",
        "Simple device unlock",
        "Email support",
        "48-hour response time",
        "Basic consultation"
      ],
      notIncluded: [
        "Advanced forensics",
        "Cryptocurrency recovery",
        "24/7 support",
        "Priority handling"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Professional",
      price: "$1950",
      period: "per service",
      description: "Comprehensive solutions for serious cases",
      features: [
        "Advanced forensic investigation",
        "Cryptocurrency recovery",
        "Phone monitoring & tracking",
        "iCloud unlock & recovery",
        "24/7 priority support",
        "Legal documentation",
        "Expert consultation",
        "Case progress tracking"
      ],
      notIncluded: [
        "Corporate training",
        "On-site visits"
      ],
      popular: true,
      color: "cyan"
    },
    {
      name: "Enterprise",
      price: "$3,580",
      period: "per service",
      description: "Complete enterprise cybersecurity solutions",
      features: [
        "Full forensic investigation",
        "Multi-platform recovery",
        "Corporate security audit",
        "Team training sessions",
        "On-site consultation",
        "24/7 dedicated support",
        "Legal expert testimony",
        "Custom security protocols",
        "Ongoing monitoring",
        "Emergency response team"
      ],
      notIncluded: [],
      popular: false,
      color: "purple"
    }
  ];

  const customServices = [
    {
      service: "Phone Monitoring & Tracking",
      price: "$299 - $599",
      description: "Real-time tracking and monitoring solutions"
    },
    {
      service: "iCloud Unlock & Recovery",
      price: "$230 - $489",
      description: "Professional iCloud services and data recovery"
    },
    {
      service: "Bitcoin Recovery",
      price: "$950 - $4,350",
      description: "Cryptocurrency recovery and wallet restoration"
    },
    {
      service: "Digital Forensics",
      price: "$890 - $3800",
      description: "Complete forensic investigation services"
    },
    {
      service: "Data Recovery",
      price: "$350 - $750",
      description: "Photo, message, and file recovery services"
    },
    {
      service: "Credit Card Solutions",
      price: "$750 - $2150",
      description: "Debt resolution and financial recovery"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section – Transparent Pricing */}
      <section
        className="relative text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/822081298/photo/futuristic-circuitry-close-up.jpg?s=612x612&w=0&k=20&c=MYMlBrPYeenRp1_3pSggndNr-JH_FB55-2Ipn4MH4vI=')"
        }}
      >

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-100 drop-shadow max-w-3xl mx-auto">
              Professional cybersecurity services with clear, upfront pricing. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans – Service Packages */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/166419812/photo/security-concept.jpg?s=612x612&w=0&k=20&c=BuqcUNaXzegO5xi4EVjnO72pvB1gJCXxf2400SCyjf8=')"
        }}
      >

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Service Packages</h2>
            <p className="text-xl text-gray-200 drop-shadow">
              Choose the package that best fits your cybersecurity needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/70 backdrop-blur-md shadow-lg border ${
                  plan.popular
                    ? 'border-cyan-500 transform scale-105'
                    : 'border-cyan-400/20'
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-200 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-100">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center opacity-50">
                      <X className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-gray-700/50 hover:bg-gray-700 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services Pricing – Individual Service Pricing */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1355569095/vector/digital-eye-data-network-cyber-security-technology.jpg?s=612x612&w=0&k=20&c=b5moC17mfe_--IMWUnv1ez6sZpXcuWRFw3HwCp5n4Q4=')"
        }}
      >

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Individual Service Pricing</h2>
            <p className="text-xl text-gray-200 drop-shadow">
              Flexible pricing for specific cybersecurity services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/70 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.service}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <Link
                    to="/contact"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section – Our Guarantee */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1128808032/vector/computer-hacker-with-a-hood-touches-the-touch-screen-binary-code-light-waves-on-abstract.jpg?s=612x612&w=0&k=20&c=EM_QOcxn-ALq070TN0XYv4RiLtKU9L7y3EGxykP-6wY=')"
        }}
      >

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Our Guarantee</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We stand behind our work with a 100% satisfaction guarantee. If we can't deliver results,
              you don't pay. Your success is our commitment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">We start work after payment and you get successful results</h3>
                <p className="text-gray-200">Payment First, Results Guaranteed</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">100% Confidential</h3>
                <p className="text-gray-200">Complete privacy and confidentiality guaranteed</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-200">Round-the-clock support for all our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1628583241/video/technology-security-with-padlock-concept-symbol-of-protection-trust-and-peace-of-mind-ideal.jpg?s=640x640&k=20&c=eMlrvCw0L3rCKCW-b5xixIvPGgANzqBVj8rKgAkg6VQ=')"
        }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white drop-shadow mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+17134281255"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call Now: (713) 428-1255
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;