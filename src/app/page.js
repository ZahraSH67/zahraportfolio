'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100) // تا اطمینان پیدا کنیم DOM آماده است
      }
    }
  }, [pathname])

  return (
    <>
      <main>
        <Hero />
        <Skills  id="skills"/>
        <Contact id="contact"/>
      </main>
    </>
  )
}