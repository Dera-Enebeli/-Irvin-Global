'use client'

import { useState, useEffect, useRef } from 'react'

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
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl card-glass shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        <div className="aspect-[4/5] relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className={`absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          <div className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="font-sans text-lg font-bold text-ice mb-1">{member.name}</h3>
            <p className="text-electric text-sm font-medium mb-3">{member.role}</p>
            <p className="text-ice/80 text-sm leading-relaxed line-clamp-4">{member.bio}</p>
          </div>
          
          <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-midnight to-transparent transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="font-sans text-lg font-bold text-ice mb-1">{member.name}</h3>
            <p className="text-electric text-sm font-medium">{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ManagementTeam() {
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
    <section id="about" className="py-20 lg:py-32 bg-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-electric font-semibold text-sm uppercase tracking-wider mb-4 block">Leadership</span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-ice mb-6">
            Meet the Management Team
          </h2>
          <p className="text-ice/70 text-lg">
            Our Experts are unique set of individuals who work tirelessly to bring smiles to your face
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
