'use client'

import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1800, startOnMount = false) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(startOnMount)
  const ref = useRef(null)

  useEffect(() => {
    if (!triggered) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { count, ref }
}
