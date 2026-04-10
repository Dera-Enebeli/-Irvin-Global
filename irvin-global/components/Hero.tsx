import Image from 'next/image'

export default function Hero({ onInquireClick }: { onInquireClick: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2070&q=80"
          alt="Modern corporate office building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex-1 flex items-center">
        <div className="max-w-3xl w-full space-y-8">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Trusted by 5,000+ Clients</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center sm:text-left">
            10 Years of
            <span className="text-gold block">Financial Excellence</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto sm:mx-0 leading-relaxed text-center sm:text-left">
            Providing Secure Investment, SME Financing, and Asset Management for over 5,000 clients 
            across Nigeria. Your trusted partner in building generational wealth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start pt-4">
            <button
              onClick={onInquireClick}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-semibold text-base hover:bg-gold-light transition-all hover:scale-105"
            >
              <span>Get Started Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-base hover:border-gold hover:text-gold transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-navy/60 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider">Head Office</p>
                <p className="text-white/80 text-sm">Plot 123, Ademola Adetokunbo Crescent, Wuse 2, Abuja</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>+234 803 456 7890</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">info@irvinglobal.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
