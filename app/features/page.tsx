'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function FeaturesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full h-screen max-w-[1400px] mx-auto rounded-[32px] overflow-hidden">
        {/* Navigation */}
        <nav className="relative flex items-center justify-between px-8 py-4 z-20">
          <Link href="/" className="flex items-center -ml-2">
            <Image
              src="/logo.png"
              alt="Finatic Labs"
              width={216}
              height={216}
              className="opacity-90"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-20 p-2 text-white/80 hover:text-white"
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
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white/80 after:transition-all"
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-sm text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/80"
            >
              Features
            </Link>
            <Link 
              href="/#about" 
              className="text-sm text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white/80 after:transition-all"
            >
              About Us
            </Link>
            <button className="bg-white/90 hover:bg-white text-black px-5 py-2 rounded-lg transition-colors">
              Join the Waitlist
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`
            fixed inset-0 bg-black/95 backdrop-blur-lg z-10 lg:hidden
            flex flex-col items-center justify-center space-y-8 transition-transform duration-300
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <Link 
              href="/" 
              className="text-lg text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white/80 after:transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-lg text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#about" 
              className="text-lg text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white/80 after:transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <button 
              className="bg-white/90 hover:bg-white text-black px-5 py-2 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Waitlist
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="flex items-center justify-center px-4 h-[calc(100vh-5rem)]">
          <div className="max-w-3xl text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-light space-y-3">
              <div className="text-white/80">Features will be available soon,</div>
              <div className="text-white/60 mt-2">our developers are still...</div>
              <div className="text-white/90 font-medium mt-2">debugging reality.</div>
            </h1>
            <div className="w-12 h-px bg-white/20 mt-6 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 