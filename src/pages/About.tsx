import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, CheckCircle, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Marcus Johnson',
      role: 'Lead Cybersecurity Strategist',
      image: 'https://i.pravatar.cc/400?img=68',
      bio: '15+ years in designing and implementing security architectures'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Forensic Investigator',
      image: 'https://i.pravatar.cc/400?img=48',
      bio: 'Expert in cryptocurrency recovery and data analysis'
    },
    {
      name: 'David Rodriguez',
      role: 'Senior Security Analyst',
      image: 'https://i.pravatar.cc/400?img=33',
      bio: 'Specialized in mobile device forensics and tracking'
    },
    {
      name: 'Emily Watson',
      role: 'Data Recovery Specialist',
      image: 'https://i.pravatar.cc/400?img=47',
      bio: 'Expert in iCloud recovery and data restoration'
    }
  ];

  const achievements = [
    { icon: <Award className="w-8 h-8" />, title: 'Licensed Professionals', desc: 'Certified cybersecurity experts' },
    { icon: <Globe className="w-8 h-8" />, title: 'Global Reach', desc: 'Serving clients worldwide' },
    { icon: <Shield className="w-8 h-8" />, title: '100% Confidential', desc: 'Complete privacy guaranteed' },
    { icon: <Target className="w-8 h-8" />, title: '99.8% Success Rate', desc: 'Proven track record' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section – About Invisible Trace Technology */}
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1674613239/photo/security-concept-digital-shield-and-lock-firewall-protection-from-viruses-and-malware-modern.jpg?s=612x612&w=0&k=20&c=CbS4QphHYD237ogeJRscfAD7DYQ2sbpuBoB8NYLbL_Q=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold drop-shadow-lg mb-6">About Invisible Trace Technology</h1>
            <p className="text-xl text-cyan-100 drop-shadow max-w-3xl mx-auto">
              Leading cybersecurity experts dedicated to protecting and recovering your digital assets with cutting-edge
              technology and unmatched expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story – full-width background, image removed */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1257928604/photo/computer-security.jpg?s=612x612&w=0&k=20&c=zg_nN6zZvOi0dkALz53bLedtvpiYrKwpA-Jq59nBEgA=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-6">Our Story</h2>
              <p className="text-lg text-white/90 drop-shadow mb-6">
                Founded in 2018, Invisible Trace Technology emerged from a critical need in the digital security landscape.
                Our founders, experienced cybersecurity professionals, recognized the growing threats to personal and corporate
                digital assets.
              </p>
              <p className="text-lg text-white/90 drop-shadow mb-6">
                What started as a small team of dedicated experts has grown into a leading cybersecurity firm, serving clients
                across the globe with innovative solutions for digital forensics, data recovery, and security investigations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-white/90">Over 500 successful cases completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-white/90">$2.5M+ in recovered digital assets</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-white/90">24/7 emergency response capability</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/962366210/photo/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security.jpg?s=612x612&w=0&k=20&c=-BJLwYAzjTsXh5Zj_Qn-5HQ-MRYA2fr_SdXv7oqqSZk=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/70 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 shadow-lg"
            >
              <Target className="w-12 h-12 text-cyan-600 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg">
                To provide world-class cybersecurity services that protect, recover, and secure digital assets while
                maintaining the highest standards of confidentiality and professionalism.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/70 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 shadow-lg"
            >
              <Globe className="w-12 h-12 text-cyan-600 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/90 text-lg">
                To be the global leader in cybersecurity solutions, setting industry standards for digital forensics, data
                recovery, and security investigations worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1174418677/photo/mobile-phone-personal-data-and-cyber-security-threat-concept-cellphone-fraud-smartphone.jpg?s=612x612&w=0&k=20&c=2z2NI5aqZR0i88hPrlqEdZlW0wLQwAYTo1nNitK8E-I=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Why Choose Us</h2>
            <p className="text-xl text-white/90 drop-shadow">Our commitment to excellence sets us apart in the cybersecurity industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-cyan-600 mb-4 flex justify-center">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-white drop-shadow mb-2">{achievement.title}</h3>
                <p className="text-white/90 drop-shadow">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1297795284/photo/computer-hacker-in-server-room.jpg?s=612x612&w=0&k=20&c=hCkiqnBZNURkT4ZDXhbuMsJ9DkxVsaHnY9qxEKlrnoI=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-white/90 drop-shadow">Experienced professionals dedicated to your digital security</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/70 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 shadow-lg text-center"
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400/50" />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-white/80 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1165211595/photo/large-see-through-screen.jpg?s=612x612&w=0&k=20&c=sedHDu_dSbGvAKGqdioux89y_wjnAlJbxiABmKAyLAg=')"
        }}
      >
        <span className="absolute inset-0 bg-black/60"></span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Ready to Work with the Best?</h2>
          <p className="text-xl text-white/90 drop-shadow mb-8 max-w-2xl mx-auto">Join hundreds of satisfied clients who trust us with their digital security needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
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

export default About;