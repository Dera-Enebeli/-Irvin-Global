'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pressLogos = [
  {
    name: 'Nairametrics',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2023/11/channels4_banner.jpg',
    url: 'https://nairametrics.com/2024/08/16/irvin-global-and-investment-group-a-premier-finance-company-celebrates-its-8-years-anniversary-with-the-unveiling-of-its-corporate-headquarters-in-maitama-abuja/',
  },
  {
    name: 'Vanguard',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2023/11/Vanguard.png',
    url: 'https://www.vanguardngr.com/2024/08/irvin-global-and-investment-group-celebrates-8th-anniversary-unveils-corporate-hq-in-maitama-abuja/',
  },
  {
    name: 'Punch',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2024/08/punch.png',
    url: 'https://punchng.com/irvin-global-and-investment-group-a-premier-finance-company-celebrates-its-8years-anniversary-with-the-unveiling-of-its-corporate-headquarters-in-maitama-abuja/',
  },
  {
    name: 'Business Day',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2024/08/businessday.png',
    url: 'https://businessday.ng/bd-weekender/sponsored-bd-weekender/article/irvin-global-and-investment-group-a-premier-finance-company-celebrates-its-8-years-anniversary-with-the-unveiling-of-its-corporate-headquarters-in-maitama-abuja/',
  },
  {
    name: 'Guardian',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2023/11/Guardian_logo.png',
    url: 'https://guardian.ng/news/firm-empowers-smes-salary-earners-with-tailored-credit-facilities/',
  },
]

const coreServices = [
  {
    title: 'Term Deposit',
    description: 'We help to facilitate mergers and acquisitions, reorganizations and broker trades for both institutions and private investors. We are insured.',
    color: '#0055FF',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Loans',
    description: 'Discover the latest market trends and uncover sources of future market growth for the Consumer Lending industry in Nigeria with research.',
    color: '#ff9500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Financial Consultancy',
    description: 'Our primary markets are young, fast growing and quickly transforming into middle-income status economies. This rapid growth creates both social and economic upheaval with their unique consequences.',
    color: '#10b981',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function NewsMedia() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const newsTitleRef = useRef<HTMLHeadingElement>(null)
  const pressGridRef = useRef<HTMLDivElement>(null)
  const servicesTitleRef = useRef<HTMLHeadingElement>(null)
  const servicesGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      gsap.fromTo(newsTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: newsTitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      const pressItems = pressGridRef.current?.querySelectorAll('a') || []
      gsap.fromTo(pressItems,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pressGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(servicesTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesTitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      const serviceCards = servicesGridRef.current?.querySelectorAll('div') || []
      serviceCards.forEach((card, i) => {
        if (card.classList.contains('group')) {
          gsap.fromTo(card,
            { 
              opacity: 0, 
              y: 60, 
              rotateY: 10,
            },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: i * 0.15,
            }
          )
        }
      })

      pressItems.forEach((item) => {
        const img = item.querySelector('img')
        if (img) {
          gsap.fromTo(img,
            { scale: 1.1 },
            {
              scale: 1,
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handlePressHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const img = e.currentTarget.querySelector('img')
    if (img) {
      gsap.to(img, {
        scale: isEnter ? 1.1 : 1,
        opacity: isEnter ? 1 : 0.5,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    gsap.to(e.currentTarget, {
      y: isEnter ? -5 : 0,
      boxShadow: isEnter ? '0 20px 40px rgba(0, 85, 255, 0.2)' : 'none',
      duration: 0.3,
    })
  }

  const handleServiceHover = (e: React.MouseEvent<HTMLDivElement>, isEnter: boolean) => {
    const icon = e.currentTarget.querySelector('.service-icon')
    const title = e.currentTarget.querySelector('h3')
    
    gsap.to(icon, {
      scale: isEnter ? 1.1 : 1,
      rotate: isEnter ? 10 : 0,
      duration: 0.3,
      ease: 'back.out(1.7)',
    })
    
    gsap.to(title, {
      y: isEnter ? -3 : 0,
      duration: 0.3,
    })
    
    gsap.to(e.currentTarget, {
      y: isEnter ? -8 : 0,
      scale: isEnter ? 1.02 : 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div ref={sectionRef}>
      <section id="news" className="py-20 lg:py-28 bg-midnight overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-3 block">In The News</span>
            <h2 ref={newsTitleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Irving Global Group in the News
            </h2>
            <p className="text-white/60 text-lg">
              We have been featured in leading Nigerian publications for our commitment to financial empowerment and SME growth.
            </p>
          </div>

          <div ref={pressGridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pressLogos.map((press) => (
              <a
                key={press.name}
                href={press.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl p-6 flex items-center justify-center transition-all duration-300"
                style={{ 
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => handlePressHover(e, true)}
                onMouseLeave={(e) => handlePressHover(e, false)}
              >
                <img
                  src={press.logo}
                  alt={press.name}
                  className="max-h-12 w-auto object-contain"
                  style={{ opacity: 0.5 }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Our Core Services</span>
            <h2 ref={servicesTitleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Beyond Loans
            </h2>
            <p className="text-white/60 text-lg">
              Below are some of the services rendered at Irvin Global Group.
            </p>
          </div>

          <div ref={servicesGridRef} className="grid md:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(26, 34, 47, 0.9) 0%, rgba(11, 18, 30, 0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => handleServiceHover(e, true)}
                onMouseLeave={(e) => handleServiceHover(e, false)}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}22 0%, transparent 60%)` }} />
                
                <div className="relative z-10">
                  <div className="service-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ background: `${service.color}22`, color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3"
                    style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
