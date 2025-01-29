'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full h-screen max-w-[1400px] mx-auto rounded-[32px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {isClient && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-50"
            >
              <source src="/new.mov" type="video/quicktime" />
            </video>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
        </div>

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
            <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="text-sm text-white/80 hover:text-white transition-colors">Features</Link>
            <Link href="#about" onClick={scrollToAbout} className="text-sm text-white/80 hover:text-white transition-colors">About Us</Link>
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
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#about" 
              onClick={scrollToAbout}
              className="text-lg text-white/80 hover:text-white transition-colors"
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

        {/* Hero Section */}
        <div className="relative h-[calc(100vh-5rem)] flex items-center justify-center px-8">
          {/* Central Content */}
          <div className="text-center max-w-4xl z-10">
            <div className="inline-flex items-center bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/5 mb-8">
              <span className="text-base text-white/80 font-bold scale-125">Finatic Labs</span>
            </div>
            <h1 className="text-[64px] leading-tight font-light mb-4">
              <span className="text-white/40">Intelligence Engineered for</span> Modern Finance
            </h1>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Streamline your NBFC operations with our comprehensive software suite. Enhanced security, compliance, and efficiency—all in one platform.
            </p>
            <div className="flex items-center justify-center">
              <button className="bg-black/40 hover:bg-black/60 text-white/80 px-6 py-2.5 rounded-lg transition-colors border border-white/10 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-8 left-8">
            <button 
              onClick={scrollToFeatures}
              className="bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/5 hover:bg-black/30 transition-colors cursor-pointer"
            >
              <span className="flex items-center text-sm text-white/60">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Explore Features
              </span>
            </button>
          </div>
          <div className="absolute bottom-8 right-8">
            <span className="text-sm text-white/40">Fintech Innovation</span>
            <div className="w-8 h-px bg-white/20 mt-2"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} id="features" className="w-full min-h-screen max-w-[1400px] mx-auto px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-white">
            Our Features
          </h2>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              <div className="p-6 rounded-xl bg-black/20 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white/90 font-medium mb-2">Enhanced Security</h3>
                <p className="text-white/60">State-of-the-art security measures to protect your financial data and transactions.</p>
              </div>
              <div className="p-6 rounded-xl bg-black/20 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl text-white/90 font-medium mb-2">Compliance Management</h3>
                <p className="text-white/60">Automated compliance checks and reporting to meet regulatory requirements.</p>
              </div>
              <div className="p-6 rounded-xl bg-black/20 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white/90 font-medium mb-2">Process Optimization</h3>
                <p className="text-white/60">Streamlined workflows and automated processes for maximum efficiency.</p>
              </div>
              <div className="p-6 rounded-xl bg-black/20 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white/90 font-medium mb-2">Analytics & Insights</h3>
                <p className="text-white/60">Advanced analytics and reporting tools for data-driven decision making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div ref={aboutRef} id="about" className="w-full min-h-screen max-w-[1400px] mx-auto px-8 pt-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-white">
            About Us
          </h2>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5">
            <p className="text-lg text-white/80 leading-relaxed">
              We are a passionate team dedicated to creating innovative solutions that make a difference in the world. Our work spans various fields, from technology and design to creative industries, aiming to provide meaningful experiences for our audience. We believe in collaboration, creativity, and continuous learning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-white/90 font-medium mb-2">Innovation</h3>
                <p className="text-sm text-white/60">Pushing boundaries with creative solutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white/90 font-medium mb-2">Collaboration</h3>
                <p className="text-sm text-white/60">Working together towards excellence</p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-white/90 font-medium mb-2">Learning</h3>
                <p className="text-sm text-white/60">Continuous growth and improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}