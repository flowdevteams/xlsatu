'use client'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type RevealVariant = 'fade-up' | 'fade-right' | 'fade-left' | 'zoom' | 'none'

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements
  variant?: RevealVariant
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
  rootMargin?: string
}

export function ScrollReveal({
  as = 'div',
  variant = 'fade-up',
  delay = 0,
  duration = 460,
  once = false,
  threshold = 0.08,
  rootMargin = '0px 0px -6% 0px',
  className,
  style,
  children,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return

    const element = ref.current
    if (!element) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    // Force a deterministic hidden state after hydration so reveal transition always runs.
    setIsVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
          return
        }

        if (!once) setIsVisible(false)
      },
      { threshold, rootMargin }
    )

    const rafId = window.requestAnimationFrame(() => {
      observer.observe(element)
    })

    return () => {
      window.cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [isHydrated, once, threshold, rootMargin])

  const Component = as
  const effectiveDuration = Math.max(260, Math.round(duration * 0.62))
  const effectiveDelay = Math.round(Math.min(delay, 220) * 0.42)
  const mergedStyle: CSSProperties = {
    ...style,
    ['--sr-delay' as string]: `${effectiveDelay}ms`,
    ['--sr-duration' as string]: `${effectiveDuration}ms`,
  }

  return (
    <Component
      ref={ref}
      className={cn(className)}
      data-scroll-reveal={isHydrated ? (isVisible ? 'visible' : 'hidden') : 'visible'}
      data-sr-variant={variant}
      style={mergedStyle}
      {...props}
    >
      {children}
    </Component>
  )
}
