'use client'

import { useState, useEffect, useRef } from 'react'

const services = [
  {
    title: 'Asset Financing',
    description: 'Acquire assets without straining your cash flow. We provide flexible financing solutions for equipment, vehicles, and other business assets.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Equipment financing', 'Vehicle loans', 'Flexible repayment', 'Competitive rates'],
  },
  {
    title: 'Payday Loans',
    description: 'Quick access to funds for urgent personal needs. Designed for salary earners in private establishments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    features: ['273 days tenure', '6% interest rate', 'Salary-based', 'Quick disbursement'],
  },
  {
    title: 'SME Loans',
    description: 'Fuel your business growth with working capital, project financing, and LPO funding for small and medium enterprises.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: ['Working capital', 'Project financing', 'LPO funding', 'Flexible collateral'],
  },
  {
    title: 'Contract Financing',
    description: 'Execute government and corporate contracts with ease. Get the funding you need to fulfill large orders.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: ['Contract execution', 'PO financing', 'Supply chain', 'Competitive rates'],
  },
  {
    title: 'Payroll Loans',
    description: 'Tailored for public sector employees. Access funds with personal guarantee and flexible repayment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Public sector', 'Personal guarantee', '180 days tenure', 'Flexible repayment'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const number = (index + 1).toString().padStart(2, '0')

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        background: 'linear-gradient(135deg, rgba(26, 34, 47, 0.9) 0%, rgba(11, 18, 30, 0.95) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0, 85, 255, 0.15) 0%, transparent 60%)' }}
      />
      
      <div className="absolute top-4 right-4 text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        style={{ color: '#0055FF', fontFamily: 'Georgia, serif' }}>
        {number}
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ 
            background: isHovered 
              ? 'linear-gradient(135deg, #0055FF 0%, #3377FF 100%)' 
              : 'linear-gradient(135deg, rgba(0, 85, 255, 0.15) 0%, rgba(0, 85, 255, 0.05) 100%)',
            color: isHovered ? '#0B121E' : '#0055FF'
          }}>
          {service.icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full border transition-all duration-300 group-hover:border-electric/30"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #0055FF, transparent)' }}
      />
    </div>
  )
}

export default function Services() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0B121E 0%, #1A222F 50%, #0B121E 100%)' }} />
      <div className="absolute inset-0 opacity-30" 
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0, 85, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 50%, rgba(0, 85, 255, 0.1) 0%, transparent 40%)' }} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full"
            style={{ background: 'rgba(0, 85, 255, 0.1)', color: '#0055FF' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#0055FF' }} />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Comprehensive <span style={{ color: '#0055FF' }}>Financial Solutions</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We offer a wide range of financial services designed to meet your personal and business needs with competitive rates and flexible terms.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}