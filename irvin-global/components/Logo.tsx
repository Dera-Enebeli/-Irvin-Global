'use client'

interface LogoProps {
  className?: string
  width?: number
}

export default function Logo({ className = '', width = 80 }: LogoProps) {
  return (
    <img 
      src="/logo.png" 
      alt="Irvin Global"
      width={width}
      height={Math.round(width * 0.4)}
      className={`h-auto object-contain ${className}`}
    />
  )
}