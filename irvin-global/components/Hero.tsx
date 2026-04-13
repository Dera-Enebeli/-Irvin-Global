'use client'

import { useState, useEffect } from 'react'

const clientInitials = ['A', 'B', 'C', 'D', 'E']

export default function Hero({ onInquireClick }: { onInquireClick: () => void }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-[100vh] sm:min-h-screen bg-midnight overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-charcoal to-midnight" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 min-h-[100vh] sm:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-0 w-full">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 rounded-full px-4 py-1.5 sm:py-2">
              <span className="w-2 h-2 bg-electric rounded-full animate-pulse" />
              <span className="text-electric text-xs sm:text-sm font-semibold tracking-wide">Trusted by 5,000+ Clients</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ice leading-tight">
              10 Years of
              <span className="text-electric block mt-1 sm:mt-2">Financial Excellence</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ice/70 max-w-lg leading-relaxed">
              Providing Secure Investment, SME Financing, and Asset Management for over 5,000 clients 
              across Nigeria. Your trusted partner in building generational wealth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onInquireClick}
                className="inline-flex items-center justify-center gap-2 bg-electric text-midnight px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-gradient-to-r hover:from-electric hover:to-cyan-400 transition-all hover:scale-[1.02] shadow-lg shadow-electric/20"
              >
                Get Started Today
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-ice/80 text-ice px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-electric hover:text-midnight hover:shadow-lg hover:shadow-electric/20 transition-all text-sm sm:text-base"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-300 hidden sm:block ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric/20 to-transparent rounded-3xl transform rotate-2" />
              <div className="relative card-glass rounded-2xl sm:rounded-3xl border border-deepNavy p-6 sm:p-8 lg:p-10 shadow-lg shadow-electric/10">
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
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

                  <div className="flex items-center gap-3 sm:gap-4">
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

                  <div className="flex items-center gap-3 sm:gap-4">
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
    </section>
  )
}