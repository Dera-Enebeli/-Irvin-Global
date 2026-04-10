'use client'

interface StickyButtonProps {
  onClick: () => void
}

export default function StickyButton({ onClick }: StickyButtonProps) {
  return (
    <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-50">
      <button
        onClick={onClick}
        className="group relative bg-gold text-navy px-6 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden sm:inline">Inquire Now</span>
        
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" />
      </button>
    </div>
  )
}
