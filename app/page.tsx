'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    const currentRef = aboutRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <div className="relative w-full h-screen max-w-[1400px] mx-auto rounded-[32px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {isClient && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            >
              <source src="/new.mp4" type="video/mp4" />
            </video>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
        </div>

        {/* Hero Section */}
        <div className="relative min-h-[400px] h-[calc(100vh-3rem)] flex items-center justify-center px-4 sm:px-8">
          {/* Central Content */}
          <div className="text-center max-w-4xl z-10 mt-[-1rem] sm:mt-0">
            <div className="inline-flex items-center bg-black/20 backdrop-blur-md rounded-full px-2 sm:px-4 py-1 sm:py-2 border border-white/5 mb-4 sm:mb-6">
              <span className="text-sm sm:text-base text-white/80 font-bold">Launching Soon!</span>
            </div>
            <h1 className="text-[28px] sm:text-[48px] md:text-[64px] leading-tight font-light mb-3 sm:mb-4">
              <span className="text-white/40">Intelligence Engineered for</span> Modern Finance
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Elevate your financial operations with our AI-driven software suite. Enhanced security, compliance, and efficiency—all in one intelligent platform.
            </p>
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="flex flex-col items-center justify-center w-full max-w-xs">
                <Link href="/waitlist" className="bg-black/40 hover:bg-black/60 text-white/80 px-6 py-2.5 rounded-lg transition-colors border border-white/10 backdrop-blur-sm w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div ref={aboutRef} id="about" className="w-full min-h-screen max-w-[1400px] mx-auto px-8 pt-36 pb-36 mt-36">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-light mb-12 text-center text-white">
            About Us
          </h2>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5">
            <p className="text-lg text-white/80 leading-relaxed mb-12">
              We are a passionate team dedicated to creating innovative solutions that make a difference in the world. Our work spans various fields, from technology and design to creative industries, aiming to provide meaningful experiences for our audience. We believe in collaboration, creativity, and continuous learning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
              <div className={`text-center transition-all duration-700 delay-100 transform ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-white/90 font-medium mb-2">Innovation</h3>
                <p className="text-sm text-white/60">Pushing boundaries with creative solutions</p>
              </div>
              <div className={`text-center transition-all duration-700 delay-200 transform ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white/90 font-medium mb-2">Collaboration</h3>
                <p className="text-sm text-white/60">Working together towards excellence</p>
              </div>
              <div className={`text-center sm:col-span-2 lg:col-span-1 transition-all duration-700 delay-300 transform ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-white/90 font-medium mb-2">Learning</h3>
                <p className="text-sm text-white/60">Continuous growth and improvement</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/about" className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white/80 hover:text-white px-5 py-2 rounded-lg transition-colors">
                <span>Learn more about us</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}