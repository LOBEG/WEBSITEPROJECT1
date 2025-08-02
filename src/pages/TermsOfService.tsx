import React from 'react';

const TermsOfService = () => (
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
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{
            color: "#fff",
            letterSpacing: "0.03em",
            textShadow: "0 4px 32px #000, 0 1px 8px #222",
          }}
        >
          Terms of Service
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Invisible Trace Technology’s services—including cybersecurity consulting, digital forensics, data recovery, phone monitoring, iCloud unlocking, and cryptocurrency recovery—you agree to these Terms of Service and any applicable policies referenced herein.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            2. Services Provided
          </h2>
          <p>
            Invisible Trace Technology provides professional cybersecurity solutions, including but not limited to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Digital Forensics and Investigations</li>
            <li>Data Recovery (devices, cloud, servers)</li>
            <li>Phone Monitoring and Security</li>
            <li>iCloud Unlocking Services</li>
            <li>Cryptocurrency Recovery and Analysis</li>
            <li>Security Consulting and Incident Response</li>
          </ul>
          <p className="mt-2">
            All services are rendered by certified professionals following industry standards and legal requirements.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            3. Client Responsibilities
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Provide accurate and complete information relevant to the requested service.</li>
            <li>Ensure you have legal authorization for any devices, accounts, or data submitted for investigation or recovery.</li>
            <li>Comply with all applicable laws and regulations in your jurisdiction.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            4. Confidentiality & Privacy
          </h2>
          <p>
            Invisible Trace Technology guarantees strict confidentiality for all client data, case details, and recovered information. Data will not be shared with third parties except as required by law or with explicit client consent. See our{" "}
            <a href="/privacy-policy" style={{ color: "#79eaff", textDecoration: "underline" }}>
              Privacy Policy
            </a>{" "}
            for more details.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            5. Payment & Fees
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Service fees are communicated before engagement and may vary by case complexity.</li>
            <li>Full payment is due upon service completion unless otherwise agreed in writing.</li>
            <li>No-recovery, no-fee applies to qualifying cryptocurrency recovery services.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            6. Limitations & Disclaimers
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Invisible Trace Technology does not guarantee successful recovery or investigation outcomes in all cases.</li>
            <li>Services are provided on a best-effort basis, subject to technical and legal limitations.</li>
            <li>Clients are responsible for ensuring legal compliance when requesting monitoring or recovery services.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            7. Intellectual Property
          </h2>
          <p>
            Reports, tools, and documentation provided are for client use only and may not be reproduced or distributed without written permission from Invisible Trace Technology.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            8. Changes to Terms
          </h2>
          <p>
            Invisible Trace Technology may update these Terms of Service at any time. Changes will be posted on this page with the last updated date.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#79eaff" }}>
            9. Contact
          </h2>
          <p>
            For questions regarding these Terms or our services, please contact us at{" "}
            <a href="mailto:info@invisibletrace.tech" style={{ color: "#79eaff", textDecoration: "underline" }}>
              info@invisibletrace.tech
            </a>{" "}
            or call{" "}
            <a href="tel:+17134281255" style={{ color: "#79eaff", textDecoration: "underline" }}>
              (713) 428-1255
            </a>
            .
          </p>
        </section>
        <div
          className="text-center mt-8"
          style={{
            color: "#b5c3e1",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textShadow: "0 1px 8px #000",
          }}
        >
          Last updated: August 2025
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService;