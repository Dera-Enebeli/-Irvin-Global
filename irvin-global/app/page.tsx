'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import StatsCounter from '@/components/StatsCounter'
import InquiryModal from '@/components/InquiryModal'
import StickyButton from '@/components/StickyButton'
import Footer from '@/components/Footer'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navigation onInquireClick={() => setIsModalOpen(true)} />
      <Hero onInquireClick={() => setIsModalOpen(true)} />
      <TrustBar />
      <Services />
      <StatsCounter />
      <Footer />
      <StickyButton onClick={() => setIsModalOpen(true)} />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
