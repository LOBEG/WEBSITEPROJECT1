import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService'; // <-- ADDED IMPORT

// Article content data (with your provided images)
const articleContent = {
  'cryptocurrency-recovery-guide-2025': {
    title: "The Ultimate Guide to Cryptocurrency Recovery in 2025",
    author: "Admin",
    date: "January 15, 2025",
    category: "Cryptocurrency Recovery",
    image: "https://media.istockphoto.com/id/1445700713/video/technology-global-network-connections-background-concept.jpg?s=640x640&k=20&c=8By8-Ssar2X8FBtZa8GsJhj5SOLLksX7-KmETCY80nY=",
    content: `
      <h2>Introduction to Cryptocurrency Recovery</h2>
      <p>Cryptocurrency recovery has become increasingly important as digital assets gain mainstream adoption. Whether you've lost access to your wallet, forgotten your private keys, or fallen victim to a scam, there are professional methods to help recover your funds.</p>
      <h2>Common Cryptocurrency Loss Scenarios</h2>
      <p>Understanding how cryptocurrency is typically lost is the first step in recovery:</p>
      <ul>
        <li>Forgotten wallet passwords or private keys</li>
        <li>Hardware wallet failures or damage</li>
        <li>Exchange hacks or closures</li>
        <li>Phishing attacks and scams</li>
        <li>Accidental deletion of wallet files</li>
      </ul>
      <h2>Professional Recovery Methods</h2>
      <p>Our team employs advanced techniques including:</p>
      <ul>
        <li>Blockchain analysis and transaction tracing</li>
        <li>Wallet file recovery and repair</li>
        <li>Private key reconstruction</li>
        <li>Exchange negotiation and legal assistance</li>
        <li>Forensic analysis of compromised systems</li>
      </ul>
      <h2>Prevention Strategies</h2>
      <p>The best recovery is prevention. Implement these security measures:</p>
      <ul>
        <li>Use hardware wallets for large amounts</li>
        <li>Create multiple backups of your private keys</li>
        <li>Enable two-factor authentication</li>
        <li>Regularly update your security practices</li>
        <li>Never share your private keys or seed phrases</li>
      </ul>
      <h2>When to Seek Professional Help</h2>
      <p>Contact our experts if you're dealing with significant losses or complex recovery scenarios. Our success rate in cryptocurrency recovery cases exceeds 85%, and we work on a no-recovery, no-fee basis for qualifying cases.</p>
    `
  },
  'phone-monitoring-legal-considerations-and-best-practices': {
    title: "Phone Monitoring: Legal Considerations and Best Practices",
    author: "Admin",
    date: "June 12, 2025",
    category: "Phone Monitoring",
    image: "https://media.istockphoto.com/id/540849924/photo/hacker-using-phone.jpg?s=612x612&w=0&k=20&c=oz1z2K-z7C5-hueoFXMkLuypcRznhGPcu_PhHEU7mTU=",
    content: `
      <h2>Legal Framework for Phone Monitoring</h2>
      <p>Phone monitoring operates within a complex legal landscape that varies by jurisdiction. Understanding these laws is crucial before implementing any surveillance solutions.</p>
      <h2>Legitimate Use Cases</h2>
      <p>Phone monitoring is legally permissible in several scenarios:</p>
      <ul>
        <li>Parental monitoring of minor children</li>
        <li>Employee monitoring with proper consent</li>
        <li>Personal device tracking for security</li>
        <li>Court-ordered surveillance</li>
      </ul>
      <h2>Best Practices for Implementation</h2>
      <p>When implementing phone monitoring solutions:</p>
      <ul>
        <li>Always obtain proper consent</li>
        <li>Clearly communicate monitoring policies</li>
        <li>Limit data collection to necessary information</li>
        <li>Secure all collected data</li>
        <li>Regular review and audit of monitoring activities</li>
      </ul>
      <h2>Privacy Considerations</h2>
      <p>Balancing security needs with privacy rights requires careful consideration of data minimization principles and transparent communication with all parties involved.</p>
    `
  },
  'icloud-security-how-to-protect-your-data-from-breaches': {
    title: "iCloud Security: How to Protect Your Data from Breaches",
    author: "Admin",
    date: "June 10, 2025",
    category: "Data Security",
    image: "https://media.istockphoto.com/id/2219314386/photo/data-collection-on-icloud-a-graphic-showing-a-chart-of-data-storage-and-retrieval-is-on-the.jpg?s=612x612&w=0&k=20&c=fVJZDpSRnF9j8YO83hC4d1hgFLbsct-rCEpsd_0arSg=",
    content: `
      <h2>Understanding iCloud Security</h2>
      <p>iCloud stores sensitive personal data including photos, documents, and device backups. Protecting this information requires a multi-layered security approach.</p>
      <h2>Essential Security Measures</h2>
      <ul>
        <li>Enable two-factor authentication immediately</li>
        <li>Use strong, unique passwords</li>
        <li>Regularly review account activity</li>
        <li>Limit data stored in iCloud</li>
        <li>Keep devices updated with latest security patches</li>
      </ul>
      <h2>Advanced Protection Strategies</h2>
      <p>For enhanced security, consider:</p>
      <ul>
        <li>Using Advanced Data Protection for iCloud</li>
        <li>Implementing app-specific passwords</li>
        <li>Regular security audits of connected devices</li>
        <li>Monitoring for suspicious account activity</li>
      </ul>
      <h2>What to Do If Compromised</h2>
      <p>If you suspect your iCloud account has been compromised, immediately change your password, review account activity, and contact Apple Support for assistance.</p>
    `
  },
  'digital-forensics-in-corporate-investigations': {
    title: "Digital Forensics in Corporate Investigations",
    author: "Admin",
    date: "March 8, 2025",
    category: "Digital Forensics",
    image: "https://media.istockphoto.com/id/1136760651/photo/blue-circuit-board-background-of-computer-motherboard-and-magnifier-glass-with-red-zoomed.jpg?s=612x612&w=0&k=20&c=K3fSkMwnUs07L5D6NeNQDg7fsidm-tPzpoMIBc3Uxeo=",
    content: `
      <h2>The Role of Digital Forensics in Corporate Settings</h2>
      <p>Digital forensics has become an essential tool in corporate investigations, helping organizations uncover evidence of fraud, data breaches, intellectual property theft, and employee misconduct. Our forensic experts use advanced techniques to preserve, analyze, and present digital evidence.</p>
      <h2>Common Corporate Investigation Scenarios</h2>
      <p>Digital forensics is crucial in various corporate situations:</p>
      <ul>
        <li>Employee misconduct and policy violations</li>
        <li>Intellectual property theft and trade secret misappropriation</li>
        <li>Financial fraud and embezzlement cases</li>
        <li>Data breach investigations and incident response</li>
        <li>Regulatory compliance and litigation support</li>
      </ul>
      <h2>Forensic Investigation Process</h2>
      <p>Our systematic approach ensures thorough and legally admissible results:</p>
      <ul>
        <li>Evidence identification and preservation</li>
        <li>Forensic imaging and data acquisition</li>
        <li>Comprehensive analysis using specialized tools</li>
        <li>Timeline reconstruction and correlation</li>
        <li>Expert testimony and court presentation</li>
      </ul>
      <h2>Technology and Tools</h2>
      <p>We utilize industry-leading forensic tools and methodologies:</p>
      <ul>
        <li>EnCase and FTK for comprehensive disk analysis</li>
        <li>Mobile forensics for smartphones and tablets</li>
        <li>Network forensics and traffic analysis</li>
        <li>Cloud forensics for SaaS and IaaS platforms</li>
        <li>Memory forensics for volatile data recovery</li>
      </ul>
      <h2>Legal Compliance and Chain of Custody</h2>
      <p>All our investigations maintain strict chain of custody procedures and comply with legal requirements to ensure evidence admissibility in court proceedings.</p>
    `
  },
  'cybersecurity-threats-in-2024-what-you-need-to-know': {
    title: "Cybersecurity Threats in 2024: What You Need to Know",
    author: "Admin",
    date: "May 1, 2024",
    category: "Cybersecurity",
    image: "https://media.istockphoto.com/id/1372448103/photo/internet-security-protection-from-hacker-attacking-cyber-attack-and-network-security-concept.jpg?s=612x612&w=0&k=20&c=KXEt_o85GFBFJwPQ-WlzRXl0Dnrnda5jYbirpMT1oAw=",
    content: `
      <h2>The Evolving Cybersecurity Landscape</h2>
      <p>2024 has brought new and sophisticated cyber threats that organizations and individuals must understand to protect themselves effectively. Our cybersecurity experts analyze the latest threat vectors and provide actionable defense strategies.</p>
      <h2>Top Cybersecurity Threats in 2024</h2>
      <p>The most significant threats we're tracking include:</p>
      <ul>
        <li>AI-powered phishing and social engineering attacks</li>
        <li>Ransomware-as-a-Service (RaaS) operations</li>
        <li>Supply chain attacks targeting third-party vendors</li>
        <li>Cloud misconfigurations and container vulnerabilities</li>
        <li>IoT device exploitation and botnet formation</li>
      </ul>
      <h2>Advanced Persistent Threats (APTs)</h2>
      <p>Nation-state actors and sophisticated criminal groups are employing:</p>
      <ul>
        <li>Zero-day exploits and advanced malware</li>
        <li>Living-off-the-land techniques</li>
        <li>Multi-stage attack campaigns</li>
        <li>Credential harvesting and lateral movement</li>
        <li>Data exfiltration and espionage operations</li>
      </ul>
      <h2>Protection Strategies</h2>
      <p>Essential cybersecurity measures for 2024:</p>
      <ul>
        <li>Implement Zero Trust architecture</li>
        <li>Deploy advanced endpoint detection and response (EDR)</li>
        <li>Conduct regular security awareness training</li>
        <li>Maintain comprehensive backup and recovery plans</li>
        <li>Perform continuous vulnerability assessments</li>
      </ul>
      <h2>Incident Response Planning</h2>
      <p>Prepare for cyber incidents with a comprehensive response plan that includes threat containment, evidence preservation, stakeholder communication, and business continuity measures.</p>
    `
  },
  'credit-card-fraud-prevention-and-recovery-strategies': {
    title: "Credit Card Fraud: Prevention and Recovery Strategies",
    author: "Admin",
    date: "December 10, 2024",
    category: "Financial Security",
    image: "https://media.istockphoto.com/id/1203763961/photo/stacked-credit-cards.jpg?s=612x612&w=0&k=20&c=bEEGZwG120WKDClhmltyAtP0kPMzNir49P4JO3pcies=",
    content: `
      <h2>Understanding Credit Card Fraud</h2>
      <p>Credit card fraud affects millions of consumers annually, resulting in billions of dollars in losses. Understanding how fraud occurs and implementing proper prevention measures is crucial for financial security.</p>
      <h2>Common Types of Credit Card Fraud</h2>
      <p>Fraudsters employ various methods to steal financial information:</p>
      <ul>
        <li>Skimming devices at ATMs and card readers</li>
        <li>Phishing emails and fake websites</li>
        <li>Social engineering and phone scams</li>
        <li>Data breaches at merchants and financial institutions</li>
        <li>Card-not-present fraud in online transactions</li>
      </ul>
      <h2>Prevention Best Practices</h2>
      <p>Protect yourself with these essential security measures:</p>
      <ul>
        <li>Monitor account statements and transactions regularly</li>
        <li>Use secure payment methods for online purchases</li>
        <li>Enable transaction alerts and notifications</li>
        <li>Cover your PIN when entering it in public</li>
        <li>Use contactless payments when possible</li>
      </ul>
      <h2>What to Do If You're a Victim</h2>
      <p>If you discover fraudulent charges:</p>
      <ul>
        <li>Contact your bank or card issuer immediately</li>
        <li>File a dispute for unauthorized transactions</li>
        <li>Request a new card with different numbers</li>
        <li>File a report with local law enforcement</li>
        <li>Monitor your credit reports for suspicious activity</li>
      </ul>
      <h2>Recovery and Legal Rights</h2>
      <p>Under federal law, your liability for unauthorized credit card charges is limited to $50. Most card issuers offer zero liability protection, meaning you won't be responsible for fraudulent charges when reported promptly.</p>
      <h2>Professional Assistance</h2>
      <p>For complex fraud cases involving significant losses or identity theft, consider working with financial crime investigators who can help trace fraudulent transactions and assist with recovery efforts.</p>
    `
  },
  'data-recovery-what-to-do-when-files-are-deleted': {
    title: "Data Recovery: What to Do When Files Are Deleted",
    author: "Admin",
    date: "November 3, 2024",
    category: "Data Recovery",
    image: "https://media.istockphoto.com/id/1414915754/photo/businessman-using-a-computer-to-backup-storage-data-internet-technology-concept-for-backup.jpg?s=612x612&w=0&k=20&c=QQuEcsZi5WfEY6040_oEwEpvQO-TYVTw-wM1FtqL6-Y=",
    content: `
      <h2>Understanding Data Loss</h2>
      <p>Data loss can occur due to various reasons including accidental deletion, hardware failure, software corruption, or malicious attacks. Quick action and proper techniques can often recover seemingly lost files.</p>
      <h2>Immediate Steps After Data Loss</h2>
      <p>When you realize files are missing, take these immediate actions:</p>
      <ul>
        <li>Stop using the affected device immediately</li>
        <li>Do not install new software or save new files</li>
        <li>Check the Recycle Bin or Trash folder</li>
        <li>Look for backup copies in cloud storage</li>
        <li>Avoid attempting DIY recovery on critical data</li>
      </ul>
      <h2>Types of Data Recovery</h2>
      <p>Different scenarios require different recovery approaches:</p>
      <ul>
        <li>Logical recovery for deleted or corrupted files</li>
        <li>Physical recovery for damaged storage devices</li>
        <li>RAID recovery for server and enterprise systems</li>
        <li>Mobile device recovery for smartphones and tablets</li>
        <li>Cloud data recovery for SaaS platforms</li>
      </ul>
      <h2>Professional Recovery Process</h2>
      <p>Our data recovery specialists follow a systematic approach:</p>
      <ul>
        <li>Initial assessment and damage evaluation</li>
        <li>Device imaging to prevent further data loss</li>
        <li>Specialized recovery using advanced tools</li>
        <li>File verification and integrity checking</li>
        <li>Secure data transfer to new storage media</li>
      </ul>
      <h2>Prevention Strategies</h2>
      <p>Implement these practices to minimize future data loss:</p>
      <ul>
        <li>Regular automated backups to multiple locations</li>
        <li>Use of reliable storage devices and systems</li>
        <li>Implementation of version control systems</li>
        <li>Regular testing of backup and recovery procedures</li>
        <li>Employee training on data handling best practices</li>
      </ul>
      <h2>When to Seek Professional Help</h2>
      <p>Contact data recovery experts for critical business data, physically damaged devices, or when initial recovery attempts have failed. Professional services offer the highest success rates and maintain data confidentiality.</p>
    `
  }
};

const ArticleView = () => {
  const { slug } = useParams();
  const article = articleContent[slug as keyof typeof articleContent];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Custom background for article pages
  const backgroundImage =
    "url('https://media.istockphoto.com/id/924667234/vector/silhouette-of-a-hacker-on-a-background-with-binary-code-and-lights-hacking-of-a-computer.jpg?s=612x612&w=0&k=20&c=JtBb9mRf5ZLoglrSbynCbC-bmslJQMxy8NsdB3mjVr0=')";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
      <div
        style={{
          background: "rgba(21, 31, 52, 0.8)",
          minHeight: "100vh",
          paddingTop: "48px"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
            />
            <div className="flex items-center text-sm mb-4">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium mr-4">
                {article.category}
              </span>
              <span className="mr-4" style={{ color: "#e0eafc" }}>{article.date}</span>
              <span style={{ color: "#e0eafc" }}>{article.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4" style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>{article.title}</h1>
            <div className="flex items-center" style={{ color: "#f5f9ff" }}>
              <span>By {article.author}</span>
            </div>
          </div>
          <div
            className="prose prose-lg max-w-none"
            style={{
              color: "#f6fafd",
              textShadow: "0 1px 4px rgba(0,0,0,0.35)",
              background: "transparent"
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className="mt-12 pt-8 border-t border-gray-200" style={{ borderColor: "#e0eafc" }}>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#fff" }}>Need Professional Help?</h3>
              <p className="mb-6" style={{ color: "#e0eafc" }}>
                Our experts are ready to assist you with your cybersecurity needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Expert Help
                </a>
                <a
                  href="tel:+17134281255"
                  className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call: (713) 428-1255
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticleView />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} /> {/* <-- ADDED ROUTE */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;