'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  const typedTextRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // Typing animation
    const typedText = typedTextRef.current
    if (!typedText) return

    const texts = ['Frontend Developer', 'Web Developer', 'Web Integrator', 'React Specialist']
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100

    function type() {
      const currentText = texts[textIndex]
      
      if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50
      } else {
        typedText.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 100
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true
        typingSpeed = 1500
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        typingSpeed = 500
      }

      setTimeout(type, typingSpeed)
    }

    const timer = setTimeout(type, 1000)

    // Image animation
    if (imageRef.current) {
      imageRef.current.style.opacity = '0'
      imageRef.current.style.transform = 'translateY(20px)'
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
          imageRef.current.style.opacity = '1'
          imageRef.current.style.transform = 'translateY(0)'
        }
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.nameWrapper}>
              <h1 className={styles.heroTitle}>
                Hi, I'm <span>Zahra Shahabi</span>
              </h1>
              <p className={styles.heroSubtitle}>
                <span ref={typedTextRef} className={styles.typed}></span>
                <span className={styles.cursor}>|</span>
              </p>
            </div>
            
            <p className={styles.heroDescription}>
              I create beautiful, functional digital experiences with modern web technologies.
            </p>
            
            <div className={styles.heroButtons}>
              <a href="/portfolio" className={styles.heroBtn}>
                View My Work
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.heroImage} ref={imageRef}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/image/profilePic.jpg" 
                alt="Zahra Shahabi"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}