import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const EASING = {
  smooth: 'power3.out',
  dramatic: 'power4.out',
  bounce: 'elastic.out(1, 0.5)',
  snap: 'power2.inOut',
  linear: 'none',
}

export const DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  cinematic: 1.5,
}

ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top 80%',
})

export const initLenis = () => {
  if (typeof window === 'undefined') return null
  
  const lenis = new (window as any).Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return lenis
}

export { gsap, ScrollTrigger }
