'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: 'Dr. Nwangwa Uzonna',
    role: 'Group Managing Director/CEO',
    bio: 'HCIB,FCIPA,PCF,DBA-Honoris causa,CMP. A seasoned banker with over 14 years of experience in Investment banking, electronic banking, Retail Banking and Business development.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2021/05/GMD-2-418x433.jpg',
  },
  {
    name: 'Olowokere Joy',
    role: 'General Manager Business Development',
    bio: 'HCIB,CMP. With a background in strategic business growth, she brings years of extensive experience to her role, driving the company\'s vision of financial empowerment and innovation.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2017/08/mary-Imande-418x433.jpg',
  },
  {
    name: 'Miss Ojunta Christiana',
    role: 'General Manager Branch Services',
    bio: 'Joined Irvin Global in 2021 where she distinguished herself through her exceptional performance in efficient and detail-oriented financial operations management.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2024/06/Amina2.jpg',
  },
  {
    name: 'Miss Jane Osawe',
    role: 'General Manager, Human Capital Management',
    bio: 'B.Sc. in Economics with over nine years of progressive experience in customer experience optimization and strategic people management.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2024/06/IMG_7732-418x433.png',
  },
  {
    name: 'Hilaria Rudolf',
    role: 'General Manager, Treasury and Investment',
    bio: 'HCIB. Has a multifunctional background in law and business development. She joined as the assistant General Manager Investment and was recently appointed GM Investment and Legal services.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2016/07/photo_2023-07-26_11-11-02-418x433.jpg',
  },
  {
    name: 'Uzoamaka Okorie',
    role: 'General Manager, Technology & Communications',
    bio: 'Plays a crucial role in driving the company\'s digital transformation and communication strategies with extensive background in corporate communications and technology.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2017/08/Joy-olowokere-418x433.jpg',
  },
  {
    name: 'Chioma Emeaghara',
    role: 'General Manager, Recovery & Compliance',
    bio: 'Degree in International Relations and Political Science from Landmark University. Built a strong reputation for excellence in sales management, risk management, and integrity-building.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2025/04/Chioma-418x433.jpg',
  },
  {
    name: 'Amina Emeka',
    role: 'General Manager, Performance & Legal',
    bio: 'LL.B from North American University, Benin Republic. Known for being career driven, detail-oriented, and unwavering commitment to excellence.',
    image: 'https://www.irvinglobalgroup.com/wp-content/uploads/2025/04/bar-Ebube-418x433.jpg',
  },
]

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { 
          opacity: 0, 
          y: 60, 
          rotateY: 15,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: (index % 4) * 0.1,
        }
      )

      const maskDiv = cardRef.current?.querySelector('.mask-div')
      if (maskDiv) {
        gsap.fromTo(maskDiv as Element,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: (index % 4) * 0.1,
          }
        )
      }

      gsap.fromTo(imageRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: (index % 4) * 0.1,
        }
      )

      gsap.to(cardRef.current, {
        y: -8,
        duration: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
    })
    gsap.to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
    gsap.to(cardRef.current, {
      scale: 1.02,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      duration: 0.3,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    })
    gsap.to(contentRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
    })
    gsap.to(cardRef.current, {
      scale: 1,
      boxShadow: 'none',
      duration: 0.3,
    })
  }

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent origin-left z-10 mask-div" />
        
        <img
          ref={imageRef}
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
        
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent opacity-0 z-20" />
        
        <div 
          ref={contentRef}
          className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 z-30"
          style={{ transform: 'translateY(20px)' }}
        >
          <h3 className="font-sans text-lg font-bold text-ice mb-1">{member.name}</h3>
          <p className="text-electric text-sm font-medium mb-3">{member.role}</p>
          <p className="text-ice/80 text-sm leading-relaxed line-clamp-4">{member.bio}</p>
        </div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="font-sans text-lg font-bold text-ice mb-1">{member.name}</h3>
          <p className="text-electric text-sm font-medium">{member.role}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 origin-left z-30"
        style={{ 
          background: 'linear-gradient(90deg, #0055FF, transparent)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
        }}
      />
    </div>
  )
}

export default function ManagementTeam() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.2,
        }
      )

      const cards = gridRef.current?.children || []
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16" style={{ perspective: '500px' }}>
          <span className="text-electric font-semibold text-sm uppercase tracking-wider mb-4 block">Leadership</span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-ice mb-6">
            Meet the Management Team
          </h2>
          <p ref={subtitleRef} className="text-ice/70 text-lg">
            Our Experts are unique set of individuals who work tirelessly to bring smiles to your face
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
