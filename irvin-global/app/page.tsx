'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import LoanProducts from '@/components/LoanProducts'
import ManagementTeam from '@/components/ManagementTeam'
import NewsMedia from '@/components/NewsMedia'
import InquiryModal from '@/components/InquiryModal'
import StickyButton from '@/components/StickyButton'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen">
        <Navigation onInquireClick={() => setIsModalOpen(true)} />
        <Hero onInquireClick={() => setIsModalOpen(true)} />
        <Services />
        <LoanProducts />
        <ManagementTeam />
        <NewsMedia />
        <Footer />
        <StickyButton onClick={() => setIsModalOpen(true)} />
        
        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </SmoothScrollProvider>
  )
}
