'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const useGSAP = (
  callback: (context: { gsap: typeof gsap; timeline: gsap.core.Timeline | null }) => void,
  deps: React.DependencyList = []
) => {
  const ctx = useRef<gsap.Context | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    ctx.current = gsap.context(() => {
      callback({ gsap, timeline: null })
    })

    return () => {
      ctx.current?.revert()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export const splitTextToChars = (element: HTMLElement): HTMLElement[] => {
  const text = element.textContent || ''
  element.innerHTML = ''
  
  const chars: HTMLElement[] = []
  text.split('').forEach((char) => {
    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00A0' : char
    span.style.display = 'inline-block'
    span.style.overflow = 'hidden'
    element.appendChild(span)
    chars.push(span)
  })

  return chars
}

export const splitTextToWords = (element: HTMLElement): HTMLElement[] => {
  const html = element.innerHTML
  const words = html.split(/(\s+)/).filter(word => word.trim())
  
  element.innerHTML = ''
  
  const wordElements: HTMLElement[] = []
  words.forEach((word) => {
    const wrapper = document.createElement('span')
    wrapper.style.display = 'inline-block'
    wrapper.style.overflow = 'hidden'
    wrapper.style.whiteSpace = 'nowrap'
    
    const span = document.createElement('span')
    span.textContent = word
    span.style.display = 'inline-block'
    
    wrapper.appendChild(span)
    element.appendChild(wrapper)
    wordElements.push(span)
  })

  return wordElements
}

export const revealText = (
  elements: HTMLElement[],
  options: {
    y: number
    duration: number
    stagger: number
    delay?: number
    ease?: string
  }
) => {
  gsap.set(elements, { y: options.y, opacity: 0 })
  
  return gsap.to(elements, {
    y: 0,
    opacity: 1,
    duration: options.duration,
    stagger: options.stagger,
    delay: options.delay || 0,
    ease: options.ease || 'power3.out',
  })
}
