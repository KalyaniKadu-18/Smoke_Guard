import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Brand */}
        <div className={`${styles.footerBox} ${styles.brandBox}`}>
          <h2 className={styles.logo}>
            Smoke<span>Guard</span>
          </h2>

          <p className={styles.description}>
            An AI-powered smoke detection system designed to detect
            smoke and provide faster safety alerts through intelligent
            monitoring.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerBox}>
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/detection">Detection</a>
          <a href="/alarm">Alarm</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Features */}
        <div className={styles.footerBox}>
          <h3>Features</h3>

          <p>AI Smoke Detection</p>
          <p>Real-Time Monitoring</p>
          <p>Image & Video Detection</p>
          <p>Instant Alerts</p>
          <p>Safety Monitoring</p>
        </div>

        {/* Contact */}
        <div className={styles.footerBox}>
          <h3>Contact Us</h3>

          <p>📍 Pune, Maharashtra</p>
          <p>📧 support@smokeguard.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className={styles.footerBottom}>
        <p>© 2026 SmokeGuard. All Rights Reserved.</p>

        <p>AI-Powered Smoke Detection & Safety System</p>
      </div>
    </footer>
  );
}

export default Footer;