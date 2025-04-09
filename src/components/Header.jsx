'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import ScrollLink from './ScrollLink'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContainer}>
          {/* Logo - Name on the left */}
          <Link href="/" className={styles.logo}>
            <h1>Zahra Shahabi</h1>
          </Link>

          {/* Hamburger Menu button */}
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
          </button>

          {/* Navigation Menu */}
          <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ''}`}>
            <ul>
              <li><Link href="/" onClick={closeMenu}>Home</Link></li>
              <li><Link href="/about" onClick={closeMenu}>About Me</Link></li>
              <li>
              <ScrollLink href="#skills" onClick={closeMenu}>Skills</ScrollLink>
                {/* <Link href="#skills" onClick={closeMenu}>Skills</Link> */}
              </li>
              <li><Link href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
              <li>
                {/* <Link href="#contact" onClick={closeMenu}>Contact</Link> */}
                <ScrollLink href="#contact" onClick={closeMenu}>Contact</ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
