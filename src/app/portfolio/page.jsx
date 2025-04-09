'use client'

import Link from 'next/link'
import styles from './styles.module.css'

export default function Portfolio() {
  const projects = [
    {
      id: "project-1",
      title: "Trainer",
      description: "A web app for a dance school by means of NextJs & TailwindCss",
      image: "/image/123png.png",
      github: "https://github.com/CMK-WU11/svendepr-ve-eud-b-ZahraSH67/tree/dev/src",
    },
    {
      id: "project-2",
      title: "Landrup Dans",
      description: "A web app for a dance school by means of NextJs & TailwindCss",
      image: "/image/Landrup Dans.png",
      github: "https://github.com/ZahraSH67/terminspr-ve-wu11-ZahraSH67",
    },
    {
      id: "project-3",
      title: "Din mægler",
      description: "A real estate agency website by means of NextJs & TailwindCss",
      image: "/image/Home 01.jpg",
      github: "https://github.com/CMK-WU11/din-maegler-wu11",
    },

    {
      id: "project-4",
      title: "Hifi-corner",
      description: "A home appliance store website by means of ReactJs & Sass",
      image: "/image/HiFi-corner.png",
      github: "",
    }
  ]

  return (
    <div className={styles.portfolioPage}>
      <section className={styles.portfolioSection}>
        <div className={styles.sectionTitle}>
          <h1 className={styles.updateHeader}>I am updating this page</h1>
          <h2>My Projects</h2>
          <p>Explore the projects I've worked on and their details.</p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageWrapper}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <Link href={`/portfolio/${project.id}`}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubButton}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

