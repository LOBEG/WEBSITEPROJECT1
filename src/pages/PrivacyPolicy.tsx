import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, rgba(15,15,15,0.97) 80%, rgba(40,40,40,0.99) 100%)",
        backdropFilter: "blur(8px)",
        position: "relative",
      }}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div
          className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12"
          style={{
            color: "#f7f7fa",
            background: "rgba(20,20,20,0.75)",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px 4px rgba(0,0,0,0.85)",
            border: "1.5px solid rgba(60,60,60,0.5)",
            backdropFilter: "blur(2px)",
            textShadow: "0 2px 14px rgba(0,0,0,0.85)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div style={{ background: "rgba(60,199,255,0.1)" }} className="p-4 rounded-full">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{
                color: "#fff",
                letterSpacing: "0.03em",
                textShadow: "0 4px 32px #000, 0 1px 8px #222",
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-xl" style={{ color: "#d8ecfa" }}>
              Your privacy and security are our top priorities
            </p>
            <p className="text-sm mt-2" style={{ color: "#b5c3e1" }}>
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none" style={{ color: "#f7f7fa" }}>
            <div
              style={{
                background: "rgba(30,40,50,0.85)",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "2rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: "#79eaff" }}>
                <FileText className="w-6 h-6 mr-2 text-cyan-400" />
                About Invisible Trace Technology
              </h2>
              <p>
                Invisible Trace Technology is a leading cybersecurity firm specializing in digital forensics,
                data recovery, phone monitoring, iCloud unlock services, and advanced security solutions.
                Founded by a team of certified cybersecurity professionals, we provide comprehensive protection
                and recovery services for individuals and organizations worldwide. Our expertise spans across
                cryptocurrency recovery, digital investigations, and cutting-edge surveillance technologies.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: "#79eaff" }}>
                  <Lock className="w-6 h-6 mr-2 text-cyan-400" />
                  Our Commitment to Privacy
                </h2>
                <p className="mb-4">
                  We understand that privacy and confidentiality are paramount in cybersecurity services.
                  All client information, case details, and recovered data are handled with the highest
                  level of security and discretion. Our commitment extends beyond legal requirements to
                  ensure your sensitive information remains protected at all times.
                </p>
                <div
                  style={{
                    background: "rgba(60,199,255,0.05)",
                    borderLeft: "4px solid #79eaff",
                    padding: "1rem",
                    borderRadius: "0.75rem",
                  }}
                >
                  <p style={{ color: "#79eaff", fontWeight: 500 }}>
                    <strong>100% Confidentiality Guarantee:</strong> We maintain strict confidentiality
                    agreements and never disclose client information to third parties without explicit consent.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  Information We Collect
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    style={{
                      background: "rgba(30,40,50,0.7)",
                      borderRadius: "0.75rem",
                      padding: "1.25rem",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3" style={{ color: "#f7f7fa" }}>
                      Contact Information
                    </h3>
                    <ul className="space-y-2">
                      <li>• Name and contact details</li>
                      <li>• Email addresses and phone numbers</li>
                      <li>• Business or organization information</li>
                      <li>• Preferred communication methods</li>
                    </ul>
                  </div>
                  <div
                    style={{
                      background: "rgba(30,40,50,0.7)",
                      borderRadius: "0.75rem",
                      padding: "1.25rem",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3" style={{ color: "#f7f7fa" }}>
                      Service-Related Data
                    </h3>
                    <ul className="space-y-2">
                      <li>• Technical details for service delivery</li>
                      <li>• Case-specific information for investigations</li>
                      <li>• Device information for recovery services</li>
                      <li>• Payment information for billing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: "#79eaff" }}>
                  <Eye className="w-6 h-6 mr-2 text-cyan-400" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <div
                    style={{
                      borderLeft: "4px solid #444",
                      paddingLeft: "1rem",
                    }}
                  >
                    <h3 className="font-semibold" style={{ color: "#f7f7fa" }}>
                      Service Delivery
                    </h3>
                    <p>
                      To provide cybersecurity services, digital forensics, and data recovery solutions.
                    </p>
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #444",
                      paddingLeft: "1rem",
                    }}
                  >
                    <h3 className="font-semibold" style={{ color: "#f7f7fa" }}>
                      Communication
                    </h3>
                    <p>
                      To communicate about your case, provide updates, and offer support.
                    </p>
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #444",
                      paddingLeft: "1rem",
                    }}
                  >
                    <h3 className="font-semibold" style={{ color: "#f7f7fa" }}>
                      Legal Compliance
                    </h3>
                    <p>
                      To comply with legal obligations and assist in lawful investigations when required.
                    </p>
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #444",
                      paddingLeft: "1rem",
                    }}
                  >
                    <h3 className="font-semibold" style={{ color: "#f7f7fa" }}>
                      Service Improvement
                    </h3>
                    <p>
                      To enhance our services and develop new cybersecurity solutions (anonymized data only).
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  How We Protect Your Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: "#f7f7fa" }}>
                      Technical Safeguards
                    </h3>
                    <ul className="space-y-2">
                      <li>• End-to-end encryption for all communications</li>
                      <li>• Secure, isolated environments for data analysis</li>
                      <li>• Multi-factor authentication systems</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Encrypted data storage and transmission</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: "#f7f7fa" }}>
                      Operational Security
                    </h3>
                    <ul className="space-y-2">
                      <li>• Strict access controls and authentication protocols</li>
                      <li>• Background-checked security personnel</li>
                      <li>• Secure facilities with physical access controls</li>
                      <li>• Regular compliance reviews and assessments</li>
                      <li>• Secure data destruction after case completion</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  Data Retention and Disposal
                </h2>
                <div
                  style={{
                    background: "rgba(255,222,89,0.08)",
                    border: "1px solid rgba(255,222,89,0.12)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                  }}
                >
                  <p className="mb-4">
                    We retain client data only for as long as necessary to provide services and meet legal obligations.
                    Upon case completion, all sensitive data is securely destroyed using industry-standard methods.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div style={{ color: "#f7f7fa", fontWeight: 600 }}>Active Cases</div>
                      <div style={{ color: "#b5c3e1" }}>Duration of service</div>
                    </div>
                    <div className="text-center">
                      <div style={{ color: "#f7f7fa", fontWeight: 600 }}>Completed Cases</div>
                      <div style={{ color: "#b5c3e1" }}>30-90 days retention</div>
                    </div>
                    <div className="text-center">
                      <div style={{ color: "#f7f7fa", fontWeight: 600 }}>Legal Requirements</div>
                      <div style={{ color: "#b5c3e1" }}>As required by law</div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  Your Rights
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Access and Correction",
                      desc: "Request access to your personal information and request corrections if needed.",
                    },
                    {
                      title: "Data Portability",
                      desc: "Request a copy of your data in a structured, machine-readable format.",
                    },
                    {
                      title: "Deletion",
                      desc: "Request deletion of your personal information (subject to legal requirements).",
                    },
                    {
                      title: "Opt-out",
                      desc: "Opt-out of non-essential communications and marketing materials.",
                    },
                  ].map((item, idx) => (
                    <div className="flex items-start space-x-3" key={item.title}>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold" style={{ color: "#f7f7fa" }}>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  Professional Standards and Certifications
                </h2>
                <p className="mb-4">
                  Our team adheres to industry best practices and maintains certifications from leading
                  cybersecurity organizations including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• Certified Information Systems Security Professional (CISSP)</li>
                    <li>• Certified Ethical Hacker (CEH)</li>
                    <li>• Computer Hacking Forensic Investigator (CHFI)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• SANS Digital Forensics Certifications</li>
                    <li>• ISO 27001 Information Security Management</li>
                    <li>• Professional liability insurance coverage</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  Third-Party Services
                </h2>
                <p className="mb-4">
                  We may use trusted third-party services for specific functions such as payment processing,
                  secure communications, and specialized forensic tools. All third parties are carefully
                  vetted and bound by strict confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  International Data Transfers
                </h2>
                <p>
                  When necessary for service delivery, data may be transferred internationally. All transfers
                  are conducted with appropriate safeguards including encryption, contractual protections,
                  and compliance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#79eaff" }}>
                  Updates to This Policy
                </h2>
                <p>
                  We may update this privacy policy periodically to reflect changes in our practices or
                  legal requirements. Significant changes will be communicated to clients directly, and
                  the updated policy will be posted on our website with a revised date.
                </p>
              </section>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid #222" }}>
            <div
              style={{
                background: "rgba(30,40,50,0.7)",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#f7f7fa" }}>
                Questions About Our Privacy Practices?
              </h2>
              <p className="text-center mb-6">
                For questions about our privacy practices, to exercise your rights, or to discuss your cybersecurity needs,
                contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17134281255"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Call: (713) 428-1255
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Form
                </a>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm" style={{ color: "#b5c3e1" }}>
                  Email: privacy@invisibletrace.tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;