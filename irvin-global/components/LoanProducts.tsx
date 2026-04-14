'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const loanProducts = [
  {
    id: 'payday',
    title: 'Payday Loan',
    rate: '6%',
    tenure: '273 days',
    description: 'For salary earners in private establishments. Structured against salary with quick approval.',
    features: ['Salary-based amount', 'Affordable rate', 'Quick disbursement'],
    color: '#ff9500',
  },
  {
    id: 'payroll',
    title: 'Payroll Loan',
    rate: '6%',
    tenure: '180 days',
    description: 'For public sector employees. Access funds with personal guarantee and flexible repayment.',
    features: ['Personal guarantee', 'Flexible terms', 'Quick approval'],
    color: '#0055FF',
  },
  {
    id: 'stepup',
    title: 'Step-Up Loan',
    rate: '8%',
    tenure: 'Flexible',
    description: 'For traders with viable businesses and daily sales to augment working capital.',
    features: ['Daily sales based', 'Quick turnaround', 'Flexible tenure'],
    color: '#10b981',
  },
  {
    id: 'sme',
    title: 'SME Loan',
    rate: '12%',
    tenure: '24 months',
    description: 'Working capital, project financing, and LPO funding for small and medium enterprises.',
    features: ['Flexible collateral', 'Business focused', 'Growth support'],
    color: '#8b5cf6',
  },
]

function LoanIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    payday: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    payroll: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stepup: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    sme: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  }
  return icons[type] || icons.payday
}

export default function LoanProducts() {
  const [activeTab, setActiveTab] = useState('payday')
  const activeLoan = loanProducts.find((loan) => loan.id === activeTab) || loanProducts[0]
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const tabContainerRef = useRef<HTMLDivElement>(null)
  const mainCardRef = useRef<HTMLDivElement>(null)
  const sideCardRef = useRef<HTMLDivElement>(null)
  const rateBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      const titleChars = titleRef.current?.querySelectorAll('.char') || []
      
      gsap.fromTo(titleChars,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(tabContainerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: tabContainerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(mainCardRef.current,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(sideCardRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sideCardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.2,
        }
      )

      gsap.fromTo(rateBoxRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: rateBoxRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.4,
        }
      )

      const tabs = tabContainerRef.current?.querySelectorAll('button') || []
      tabs.forEach((tab) => {
        gsap.fromTo(tab,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: tabContainerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const tl = gsap.timeline()
    
    gsap.to(mainCardRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(mainCardRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      },
    })
  }, [activeTab])

  const splitTextToChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ display: 'inline-block', perspective: '500px' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section ref={sectionRef} id="loans" className="py-20 lg:py-28 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500">
            <span className="w-2 h-2 rounded-full animate-pulse bg-blue-500" />
            Loan Products
          </div>
          <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            {splitTextToChars('Tailored ')}<span className="text-blue-500">{splitTextToChars('Credit Facilities')}</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Competitive rates, flexible terms, and quick approval process.
          </p>
        </div>

        <div ref={tabContainerRef} className="flex flex-wrap justify-center gap-3 mb-10">
          {loanProducts.map((loan) => {
            const isActive = activeTab === loan.id
            return (
              <button
                key={loan.id}
                onClick={() => setActiveTab(loan.id)}
                className="relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden"
                style={{
                  background: isActive ? `${loan.color}20` : 'rgba(255,255,255,0.03)',
                  color: isActive ? loan.color : 'rgba(255,255,255,0.4)',
                  border: `1px solid ${isActive ? loan.color : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                <span className="relative z-10">{loan.title}</span>
                {isActive && (
                  <span 
                    className="absolute inset-0 opacity-50"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${loan.color}40, transparent)`,
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div ref={mainCardRef} className="lg:col-span-3 rounded-3xl p-8 relative overflow-hidden" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(26,34,47,0.9), rgba(11,18,30,0.95))', 
              border: '1px solid rgba(255,255,255,0.08)',
              transformStyle: 'preserve-3d',
            }}>
            <div className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at 80% 20%, ${activeLoan.color}40, transparent 50%)`,
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${activeLoan.color}20`, color: activeLoan.color }}>
                  <LoanIcon type={activeLoan.id} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeLoan.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold" style={{ color: activeLoan.color }}>{activeLoan.rate}</span>
                    <span className="text-white/30">|</span>
                    <span className="text-white/50">{activeLoan.tenure}</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-base mb-6">{activeLoan.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeLoan.features.map((feature, index) => (
                  <span key={index} className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60">
                    {feature}
                  </span>
                ))}
              </div>

              <button className="group w-full py-4 rounded-xl font-bold text-sm text-white relative overflow-hidden transition-transform hover:scale-[1.02]"
                style={{ background: activeLoan.color }}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Apply Now
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div ref={sideCardRef} className="rounded-2xl p-6 relative overflow-hidden" 
              style={{ 
                background: 'linear-gradient(135deg, rgba(26,34,47,0.9), rgba(11,18,30,0.95))', 
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
              <h3 className="text-lg font-semibold mb-5 text-white">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Quick Approval', subtitle: 'Within 48 hours', color: '#0055FF' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Secure & Safe', subtitle: 'NDIC Insured', color: '#0055FF' },
                  { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', title: 'Flexible Repayment', subtitle: 'Terms to suit you', color: '#0055FF' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/15 text-blue-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">{item.title}</p>
                      <p className="text-white/50 text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={rateBoxRef} className="rounded-xl p-5 relative overflow-hidden" style={{ background: activeLoan.color }}>
              <div className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                }}
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-semibold text-white">Starting Rate</span>
                <span className="text-3xl font-bold text-white">6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}
