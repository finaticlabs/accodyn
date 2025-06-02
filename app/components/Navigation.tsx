'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3 z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Finatic Labs"
          width={150}
          height={150}
          className="opacity-90 w-[100px] sm:w-[120px] md:w-[216px]"
          priority
        />
      </Link>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden z-50 p-2 text-white/80 hover:text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">
          About Us
        </Link>
        <Link href="/waitlist" className="bg-white/90 hover:bg-white text-black px-5 py-2 rounded-lg transition-colors">
          Join the Waitlist
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`
          fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden
          flex flex-col items-center justify-center space-y-6 
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <Link 
          href="/" 
          className="text-lg text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="text-lg text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About Us
        </Link>
        <Link 
          href="/waitlist"
          className="bg-white/90 hover:bg-white text-black px-5 py-2 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Join the Waitlist
        </Link>
      </div>
    </nav>
  )
} 