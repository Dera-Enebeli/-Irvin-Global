'use client'

import { useState, useEffect, useRef } from 'react'

const services = [
  {
    title: 'Asset Financing',
    description: 'Acquire assets without straining your cash flow. We provide flexible financing solutions for equipment, vehicles, and other business assets.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Equipment financing', 'Vehicle loans', 'Flexible repayment', 'Competitive rates'],
  },
  {
    title: 'Payday Loans',
    description: 'Quick access to funds for urgent personal needs. Designed for salary earners in private establishments.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['273 days tenure', '6% interest rate', 'Salary-based', 'Quick disbursement'],
  },
  {
    title: 'SME Loans',
    description: 'Fuel your business growth with working capital, project financing, and LPO funding for small and medium enterprises.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: ['Working capital', 'Project financing', 'LPO funding', 'Flexible collateral'],
  },
  {
    title: 'Contract Financing',
    description: 'Execute government and corporate contracts with ease. Get the funding you need to fulfill large orders.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: ['Contract execution', 'PO financing', 'Supply chain', 'Competitive rates'],
  },
  {
    title: 'Payroll Loans',
    description: 'Tailored for public sector employees. Access funds with personal guarantee and flexible repayment.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Public sector', 'Personal guarantee', '180 days tenure', 'Flexible repayment'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <div
      ref={ref}
      className={`group card-glass rounded-2xl p-5 sm:p-6 border border-deepNavy hover:border-electric/40 hover:shadow-lg hover:shadow-electric/20 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-charcoal rounded-xl flex items-center justify-center flex-shrink-0 text-electric group-hover:bg-electric group-hover:text-midnight transition-colors duration-300">
          {service.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-sans text-lg font-bold text-ice mb-1.5 group-hover:text-electric transition-colors">
            {service.title}
          </h3>
          
          <p className="text-ice/60 text-sm leading-relaxed mb-3">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {service.features.map((feature, i) => (
              <span key={i} className="inline-flex items-center text-xs text-ice/50 bg-charcoal px-2 py-1 rounded-md">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-18 lg:py-22 bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-block text-electric font-semibold text-sm uppercase tracking-widest mb-3 px-3 py-1.5 bg-electric/10 rounded-full">
            Our Services
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-ice mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-ice/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We offer a wide range of financial services designed to meet your personal and business needs.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full max-w-5xl">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full max-w-5xl">
            {services.slice(3).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}