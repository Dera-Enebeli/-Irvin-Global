'use client'

import { useState, useEffect, useRef } from 'react'

const loanProducts = [
  {
    id: 'payday',
    title: 'Payday Loan',
    rate: '6%',
    tenure: '273 days',
    description: 'For salary earners in private establishments. Structured against salary with quick approval.',
    features: ['Salary-based amount', 'Affordable rate', 'Quick disbursement'],
    color: 'from-amber-400 to-amber-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'payroll',
    title: 'Payroll Loan',
    rate: '6%',
    tenure: '180 days',
    description: 'For public sector employees. Access funds with personal guarantee and flexible repayment.',
    features: ['Personal guarantee', 'Flexible terms', 'Quick approval'],
    color: 'from-blue-500 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'stepup',
    title: 'Step-Up Loan',
    rate: '8%',
    tenure: 'Flexible',
    description: 'For traders with viable businesses and daily sales to augment working capital.',
    features: ['Daily sales based', 'Quick turnaround', 'Flexible tenure'],
    color: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: 'sme',
    title: 'SME Loan',
    rate: '12%',
    tenure: '24 months',
    description: 'Working capital, project financing, and LPO funding for small and medium enterprises.',
    features: ['Flexible collateral', 'Business focused', 'Growth support'],
    color: 'from-violet-500 to-violet-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function LoanProducts() {
  const [activeTab, setActiveTab] = useState('payday')
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

  const activeLoan = loanProducts.find((loan) => loan.id === activeTab) || loanProducts[0]

  return (
    <section id="loans" className="py-14 sm:py-18 lg:py-24 bg-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-electric font-semibold text-sm uppercase tracking-widest mb-2 px-3 py-1 bg-electric/10 rounded-full">
            Loan Products
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-ice mb-3 mt-4">
            Tailored Credit Facilities
          </h2>
          <p className="text-ice/60 text-sm sm:text-base">
            Competitive rates, flexible terms, and quick approval.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap justify-center gap-1.5 mb-8 bg-charcoal p-1.5 rounded-xl">
            {loanProducts.map((loan) => (
              <button
                key={loan.id}
                onClick={() => setActiveTab(loan.id)}
                className={`flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  activeTab === loan.id
                    ? 'bg-electric text-midnight shadow-sm'
                    : 'text-ice/50 hover:text-ice'
                }`}
              >
                {loan.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-5 lg:gap-6">
            <div className="lg:col-span-3 card-glass rounded-2xl p-5 sm:p-6 border border-deepNavy shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${activeLoan.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {activeLoan.icon}
                </div>
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-ice">{activeLoan.title}</h3>
                  <p className="text-electric font-bold text-sm">{activeLoan.rate} <span className="text-ice/40">|</span> {activeLoan.tenure}</p>
                </div>
              </div>

              <p className="text-ice/60 text-sm mb-4">{activeLoan.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {activeLoan.features.map((feature, index) => (
                  <span key={index} className="inline-flex items-center gap-1.5 bg-charcoal text-ice/60 px-2.5 py-1.5 rounded-lg text-xs font-medium">
                    <svg className="w-3 h-3 text-electric" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>

              <button className="w-full bg-electric text-midnight py-3 rounded-xl font-bold text-sm hover:bg-gradient-to-r hover:from-electric hover:to-cyan-400 transition-all shadow-lg shadow-electric/20">
                Apply Now
              </button>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="bg-midnight rounded-2xl p-5 sm:p-6 border border-deepNavy text-ice">
                <h3 className="font-semibold text-base mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Quick Approval</p>
                      <p className="text-ice/60 text-xs">Within 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Secure & Safe</p>
                      <p className="text-ice/60 text-xs">NDIC Insured</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Flexible Repayment</p>
                      <p className="text-ice/60 text-xs">Terms to suit you</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-electric to-cyan-400 rounded-xl p-4 text-midnight">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Starting Rate</span>
                  <span className="text-2xl font-bold">6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}