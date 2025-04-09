'use client'

import React from 'react'
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ProjectDetail({ params }) {
  const { id } = params

  const projects = {
    "project-1": {
      title: "Trainer",
      description: "An interactive platform for a dance school using Next.js and Tailwind CSS.",
      tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
      date: "February 2024",
      github: "https://github.com/CMK-WU11/svendepr-ve-eud-b-ZahraSH67/tree/dev/src",
      images: ["/image/123png.png", "/image/extra1.jpg", "/image/extra2.jpg"]
    },
    "project-2": {
      title: "Landrup Dans",
      description: "A web app for dance scheduling and bookings.",
      tools: ["Next.js", "Tailwind", "React Hook Form"],
      date: "January 2024",
      github: "https://github.com/ZahraSH67/terminspr-ve-wu11-ZahraSH67",
      images: ["/image/loginimage.jpg"]
    },
    "project-3": {
      title: "Din mægler",
      description: "A clean, SEO-optimized blog using markdown content.",
      tools: ["Next.js", "Markdown", "SEO"],
      date: "December 2023",
      github: "https://github.com/username/project-3",
      images: ["/image/project3.jpg"]
    },
  }

  const project = projects[id]
  if (!project) return <p>Project not found</p>

  return (
    <div className={styles.projectDetail}>
      <div className={styles.projectHeader}>
      <h1 className={styles.updateHeader}>I am updating this page</h1>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>

      <div className={styles.projectMeta}>
        <div><span>Tools:</span> {project.tools.join(', ')}</div>
        <div><span>Completed:</span> {project.date}</div>
        <a href={project.github} target="_blank" className={styles.githubButton}>View on GitHub</a>
      </div>

      {project.images?.length > 0 && (
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`Slide ${i + 1}`} className={styles.slideImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}
