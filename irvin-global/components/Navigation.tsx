'use client'

import { useState } from 'react'

export default function Navigation({ onInquireClick }: { onInquireClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded flex items-center justify-center">
              <span className="text-navy font-serif font-bold text-lg">IG</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-serif font-semibold text-lg tracking-wide">
                Irvin Global
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('stats')}
              className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
            >
              Our Impact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
            >
              Contact
            </button>
            <button
              onClick={onInquireClick}
              className="bg-gold text-navy px-5 py-2.5 rounded font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Inquire Now
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white/90 hover:text-gold py-2 text-base font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white/90 hover:text-gold py-2 text-base font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('stats')}
              className="block w-full text-left text-white/90 hover:text-gold py-2 text-base font-medium"
            >
              Our Impact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white/90 hover:text-gold py-2 text-base font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onInquireClick()
              }}
              className="w-full bg-gold text-navy px-5 py-3 rounded font-semibold text-base hover:bg-gold-light transition-colors mt-2"
            >
              Inquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
