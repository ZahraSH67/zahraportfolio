'use client'

import { useRouter } from 'next/navigation'

export default function ScrollLink({ href, onClick, children }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    if (onClick) onClick()

    const targetId = href.replace('#', '')

    if (window.location.pathname === '/') {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${targetId}`)
    }
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
