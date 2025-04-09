'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/Skills.module.css'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function Skills() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'HTML5', level: 100, color: '#E34F26' },
    { name: 'CSS3', level: 100, color: '#1572B6' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Next.js', level: 90, color: '#000000' },
    { name: 'Tailwind CSS', level: 100, color: '#06B6D4' },
    { name: 'Git', level: 80, color: '#F05032' },
    { name: 'WordPress', level: 60, color: '#3178C6' },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2>Professional Specialties</h2>
          <p>Technical Skills That Power My Projects</p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className={styles.skillsGrid}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={styles.skillCard}
            >
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              
              <div className={styles.progressContainer}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                  className={styles.progressBar}
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              
              <div className={styles.skillMeta}>
                <span>Experience: {skill.level > 80 ? 'Advanced' : skill.level > 60 ? 'Intermediate' : 'Beginner'} </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}