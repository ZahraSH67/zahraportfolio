'use client'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import ScrollLink from './ScrollLink'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
  
        <div className={styles.footerFlex}>
          {/* Contact Info - Left */}
          <div className={`${styles.footerSection} ${styles.contactSection}`}>
            <h3 className={styles.footerTitle}>Zahra Shahabi</h3>
            <p className={styles.footerText}>
              Frontend Developer
            </p>
            <a href="mailto:zahra.shahabi.dk@gmail.com" className={styles.contactLink}>
              <FaEnvelope /> zahra.shahabi.dk@gmail.com
            </a>
            <a href="tel:+4552750151" className={`${styles.contactLink} ${styles.phoneLink}`}>
            <BsFillTelephoneFill /> +45 52 75 01 51 
            </a>
          </div>

          {/* Quick Links - Center */}
          <div className={`${styles.footerSection} ${styles.linksSection}`}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><ScrollLink href="#skills">Skills</ScrollLink> </li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><ScrollLink href="#contact">Contact</ScrollLink> </li>
            </ul>
          </div>

          {/* Follow Me - Right */}
          <div className={`${styles.footerSection} ${styles.socialSection}`}>
            <h3 className={styles.footerTitle}>Follow Me</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/ZahraSH67" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a href="www.linkedin.com/in/zahra-shahabi-b69900133" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p  className={styles.madeWith}>
            &copy; {currentYear} Zahra Shahabi. All Rights Reserved.
        </p>
            <p className={styles.madeWith}>
              Made with <span className={styles.heart}>♥</span> in Denmark
            </p>
        </div>
      </div>
    </footer>
  )
}
