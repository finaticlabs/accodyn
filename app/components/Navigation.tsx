'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

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
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <button className="text-sm text-white/80 hover:text-white transition-colors">
            Tools
          </button>
          
          <div 
            className={`
              absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-lg border border-white/10 py-1
              transition-all duration-200 ease-in-out
              ${isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}
            `}
          >
            <Link
              href="/tools/emi-calculator"
              className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setIsServicesDropdownOpen(false)}
            >
              EMI Calculator
            </Link>
          </div>
        </div>
        <Link href="/#about" className="text-sm text-white/80 hover:text-white transition-colors">
          About Us
        </Link>
        <Link href="/jobs" className="text-sm text-white/80 hover:text-white transition-colors">
          Jobs
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
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            className="text-lg text-white/80 hover:text-white transition-colors"
          >
            Tools
          </button>
          
          <div 
            className={`
              mt-2 flex flex-col items-center
              transition-all duration-200 ease-in-out
              ${isServicesDropdownOpen ? 'opacity-100 visible h-10' : 'opacity-0 invisible h-0'}
            `}
          >
            <Link
              href="/tools/emi-calculator"
              className="text-base text-white/60 hover:text-white transition-colors py-2"
              onClick={() => {
                setIsServicesDropdownOpen(false)
                setIsMobileMenuOpen(false)
              }}
            >
              EMI Calculator
            </Link>
          </div>
        </div>
        <Link 
          href="/#about" 
          className="text-lg text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About Us
        </Link>
        <Link 
          href="/jobs" 
          className="text-lg text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Jobs
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