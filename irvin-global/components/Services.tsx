'use client'

import { useState } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
}

function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white rounded-xl p-8 shadow-lg transition-all duration-300 ${
        isHovered ? 'shadow-2xl -translate-y-2' : ''
      }`}
      style={{ boxShadow: '0 4px 20px rgba(0, 33, 71, 0.08)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light rounded-t-xl" />
      
      <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="font-serif text-2xl font-bold text-navy mb-4">{title}</h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-8 text-navy font-semibold text-sm flex items-center gap-2 hover:text-gold transition-colors group">
        Learn More
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      title: 'Investment Management',
      description: 'Maximize your wealth with our expertly managed investment portfolios. We offer personalized investment strategies tailored to your financial goals and risk tolerance.',
      features: [
        'Portfolio diversification across asset classes',
        'Real-time performance monitoring',
        'Tax-efficient investment strategies',
        'Dedicated relationship managers',
      ],
      icon: (
        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'SME & Contract Finance',
      description: 'Fuel your business growth with flexible financing solutions. Whether you need working capital, equipment financing, or contract execution funds, we have you covered.',
      features: [
        'Quick approval within 48 hours',
        'Flexible repayment terms up to 24 months',
        'Competitive interest rates',
        'No hidden fees or charges',
      ],
      icon: (
        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Payroll Lending',
      description: 'Access quick personal loans with repayments deducted directly from your salary. Designed for salary earners who need immediate financial assistance without the hassle.',
      features: [
        'Loans from ₦50,000 to ₦5,000,000',
        'Tenure from 3 to 12 months',
        'Instant disbursement upon approval',
        'Minimal documentation required',
      ],
      icon: (
        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From investment management to SME financing, we provide end-to-end financial services 
            designed to help individuals and businesses achieve their financial objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
