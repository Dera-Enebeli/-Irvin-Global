'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const clientInitials = ['A', 'B', 'C', 'D', 'E']

export default function Hero({ onInquireClick }: { onInquireClick: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleLine1Ref = useRef<HTMLSpanElement>(null)
  const titleLine2Ref = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const floatingShapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(badgeRef.current, 
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )

      const titleLine1Chars = titleLine1Ref.current?.querySelectorAll('span') || []
      const titleLine2Chars = titleLine2Ref.current?.querySelectorAll('span') || []

      tl.fromTo(titleLine1Chars,
        { opacity: 0, y: 80, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.03 },
        '-=0.4'
      )
      tl.fromTo(titleLine2Chars,
        { opacity: 0, y: 80, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.03 },
        '-=0.7'
      )

      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      tl.fromTo(buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      tl.fromTo(cardRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' },
        '-=0.8'
      )

      const floatingShapes = floatingShapesRef.current?.children || []
      gsap.fromTo(floatingShapes,
        { opacity: 0, scale: 0 },
        { opacity: 0.5, scale: 1, duration: 1.5, stagger: 0.2, ease: 'power2.out' }
      )

      gsap.to('.floating-shape', {
        y: 'random(-30, 30)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random',
        },
      })

      gsap.to('.floating-shape-2', {
        y: 'random(-50, 50)',
        x: 'random(-30, 30)',
        rotation: 'random(-25, 25)',
        duration: 'random(4, 7)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.8,
          from: 'random',
        },
      })

      const cardItems = cardRef.current?.querySelectorAll('.card-item') || []
      gsap.fromTo(cardItems,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, delay: 1.2, ease: 'power2.out' }
      )

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set('.hero-parallax-bg', {
            y: progress * 200,
            opacity: 1 - progress * 2,
          })
          gsap.set([titleLine1Ref.current, titleLine2Ref.current, subtitleRef.current, buttonsRef.current], {
            y: progress * 100,
            opacity: 1 - progress * 3,
          })
          gsap.set(cardRef.current, {
            y: progress * 150,
            opacity: 1 - progress * 2.5,
          })
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const splitTextToChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} style={{ display: 'inline-block', perspective: '500px' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[100vh] sm:min-h-screen bg-midnight overflow-hidden">
      <div className="hero-parallax-bg absolute inset-0 bg-gradient-to-br from-midnight via-charcoal to-midnight" />
      
      <div ref={floatingShapesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-electric/20 to-transparent blur-3xl" />
        <div className="floating-shape-2 absolute bottom-20 right-[15%] w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl" />
        <div className="floating-shape absolute top-[40%] right-[5%] w-48 h-48 rounded-full bg-gradient-to-bl from-purple-500/10 to-transparent blur-2xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 min-h-[100vh] sm:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-0 w-full">
          <div className="space-y-6 sm:space-y-8">
            <div ref={badgeRef} className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 rounded-full px-4 py-1.5 sm:py-2">
              <span className="w-2 h-2 bg-electric rounded-full" />
              <span className="text-electric text-xs sm:text-sm font-semibold tracking-wide">Trusted by 5,000+ Clients</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ice leading-tight">
              <span ref={titleLine1Ref} className="block mt-1 sm:mt-2" style={{ perspective: '500px' }}>
                {splitTextToChars('10 Years of')}
              </span>
              <span className="text-electric block mt-1 sm:mt-2" style={{ perspective: '500px' }}>
                {splitTextToChars('Financial Excellence')}
              </span>
            </h1>

            <p ref={subtitleRef} className="text-sm sm:text-base lg:text-lg text-ice/70 max-w-lg leading-relaxed">
              Providing Secure Investment, SME Financing, and Asset Management for over 5,000 clients 
              across Nigeria. Your trusted partner in building generational wealth.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onInquireClick}
                className="group inline-flex items-center justify-center gap-2 bg-electric text-midnight px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-gradient-to-r hover:from-electric hover:to-cyan-400 transition-all hover:scale-[1.02] shadow-lg shadow-electric/20"
              >
                Get Started Today
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="group inline-flex items-center justify-center gap-2 border-2 border-ice/80 text-ice px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-electric hover:text-midnight hover:shadow-lg hover:shadow-electric/20 transition-all text-sm sm:text-base"
              >
                Explore Services
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <div ref={cardRef} className="relative hidden sm:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric/20 to-transparent rounded-3xl transform rotate-2" />
              <div className="relative card-glass rounded-2xl sm:rounded-3xl border border-deepNavy p-6 sm:p-8 lg:p-10 shadow-lg shadow-electric/10">
                <div className="space-y-5 sm:space-y-6">
                  <div className="card-item flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-electric/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-ice font-semibold text-base sm:text-lg">Quick Loans</p>
                      <p className="text-ice/60 text-sm">Approval within 48 hours</p>
                    </div>
                  </div>

                  <div className="card-item flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-electric/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-ice font-semibold text-base sm:text-lg">Secure & Safe</p>
                      <p className="text-ice/60 text-sm">NDIC Insured</p>
                    </div>
                  </div>

                  <div className="card-item flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-electric/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-ice font-semibold text-base sm:text-lg">Expert Team</p>
                      <p className="text-ice/60 text-sm">Professional advisors</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-deepNavy">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex -space-x-2 sm:-space-x-3">
                        {clientInitials.map((initial, i) => (
                          <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-electric/40 to-electric/20 border-2 border-charcoal flex items-center justify-center">
                            <span className="text-[10px] sm:text-xs text-electric font-bold">{initial}</span>
                          </div>
                        ))}
                      </div>
                      <span className="ice/80 text-xs sm:text-sm font-medium">5000+ clients</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-electric" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
