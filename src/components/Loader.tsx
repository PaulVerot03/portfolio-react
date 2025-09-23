// src/components/Loader.tsx
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const solaris = 'SOLARIS'

export default function Loader({ onFinish, enabled = false }: { onFinish: () => void; enabled?: boolean }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (!enabled) {
      onFinish()
      return
    }

    let i = 0
    const revealLetter = () => {
      if (i < solaris.length -1) {
        setDisplayText(prev => prev + solaris[i++])
        setTimeout(revealLetter, 1000 / solaris.length)
      } else {
        gsap.to('#loader', {
          opacity: 0, duration: 1, delay: 1, onComplete: onFinish
        })
      }
    }
    setTimeout(revealLetter, 50)
  }, [onFinish, enabled])

  if (!enabled) {
    return null
  }

  return (
    <div id="loader">
      <img src="/igem-b-logo.webp" alt="SOLARIS Logo" />
      <h1 id="team-name" style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        letterSpacing: '0.2em',
        marginTop: '2rem',
        fontFamily: 'Rajdhani, sans-serif'
      }}>
        {displayText}
      </h1>
    </div>
  )
}
