import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-box">
          <h2 className="logo">
            Smoke<span>Guard</span>
          </h2>

          <p>
            An AI-powered smoke detection system that identifies smoke
            in real time and automatically triggers an alarm for faster
            safety response.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/detection">Detection</a>
          <a href="/alarm">Alarm</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Features */}
        <div className="footer-box">
          <h3>Features</h3>

          <p>AI Smoke Detection</p>
          <p>Real-Time Monitoring</p>
          <p>Automatic Alarm</p>
          <p>Instant Alerts</p>
          <p>Safety Monitoring</p>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>📍 Pune, Maharashtra</p>
          <p>📧 support@smokeguard.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 SmokeGuard. All Rights Reserved.
        </p>

        <p>
          AI-Powered Smoke Detection & Safety System
        </p>
      </div>

    </footer>
  );
}

export default Footer;