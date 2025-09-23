// src/components/Section.tsx
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionProps {
  id: string
  className?: string
  bgImage?: string
  speed?: number
  children: React.ReactNode
}

export default function Section({ id, className = '', bgImage, speed = 0.3, children }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current && bgImage) {
      ref.current.style.backgroundImage = `url(${bgImage})`
      window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset
        ref.current!.style.backgroundPositionY = `-${scroll * speed}px`
      })
    }

    gsap.fromTo(ref.current!.querySelector('.reveal'),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      }
    )
  }, [bgImage, speed])

  return (
    <section id={id} ref={ref} className={`section ${className} ${bgImage ? 'parallax' : ''}`}>
      <div className="content reveal">{children}</div>
    </section>
  )
}