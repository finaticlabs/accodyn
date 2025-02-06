'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function JobsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const jobs = [
    {
      title: 'Database Management Intern',
      category: 'Engineering',
      domain: 'Database Management, Data Warehousing & SQL',
      type: 'Intern',
      workMode: 'On-line',
      stipend: 'Unpaid',
      downloadLink: 'https://drive.google.com/uc?export=download&id=12BSsQf8iTZl9U21qimpGljkjZvr1-YzD'
    },
    {
      title: 'Android App Development Intern',
      category: 'Engineering',
      domain: 'Mobile App Development (Frontend and Backend) & API Integration',
      type: 'Intern',
      workMode: 'On-line',
      stipend: 'Unpaid',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1XMs-3OGmFUTkb6R91BVD1Q7iydpOn5NP'
    },
    {
      title: 'AI Development Intern',
      category: 'Engineering',
      domain: 'Large Language Models, Computer Vision, Machine Learning & Deep Learning',
      type: 'Intern',
      workMode: 'On-line',
      stipend: 'Unpaid',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1FwyEoEQtjZJXaJ31MPQLhQ0XGqBf_yDF'
    },
    {
      title: 'Frontend Development Intern',
      category: 'Engineering',
      domain: 'Frontend & UI/UX Design',
      type: 'Intern',
      workMode: 'On-line',
      stipend: 'Unpaid',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1h-siPRtgQ3f-XPqXFIj7yT0ojNTBEojG'
    },
    {
      title: 'Backend Development Intern',
      category: 'Engineering',
      domain: 'Backend Development & API Integration',
      type: 'Intern',
      workMode: 'On-line',
      stipend: 'Unpaid',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1DOCz4T_kIOplh_pkkDJiNXmOdF92dTy-'
    },
    {
      title: 'Financial Analyst Intern',
      category: 'Fintech',
      domain: 'Finance, Accounting, Loan Processing & Fintech Pipeline Development',
      type: 'Intern',
      workMode: 'On-line',
      stipend: 'Unpaid',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1UPDWwBFDVXAJmVHo7BaN7BsZ386gsSv1'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full min-h-screen max-w-[1400px] mx-auto rounded-[32px] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />

        {/* Navigation */}
        <nav className="relative flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3 z-10">
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
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="text-sm text-white/80 hover:text-white transition-colors">Features</Link>
            <Link href="/#about" className="text-sm text-white/80 hover:text-white transition-colors">About Us</Link>
            <Link href="/jobs" className="text-sm text-white/80 hover:text-white transition-colors font-medium">Jobs</Link>
            <Link href="/waitlist" className="bg-white/90 hover:bg-white text-black px-5 py-2 rounded-lg transition-colors">
              Join the Waitlist
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`
            fixed inset-0 bg-black/95 backdrop-blur-lg z-10 lg:hidden
            flex flex-col items-center justify-center space-y-6 transition-transform duration-300
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
              href="/#about" 
              className="text-lg text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/jobs" 
              className="text-lg text-white/80 hover:text-white transition-colors font-medium"
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

        {/* Jobs Section */}
        <div className="px-4 sm:px-8 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white opacity-100 mb-8">Featured Jobs</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/5">
                    <Image
                      src="/favicon.svg"
                      alt="Finatic Labs"
                      width={32}
                      height={32}
                      className="opacity-90"
                      priority
                      unoptimized
                    />
                  </div>
                  <span className="text-sm text-white/80 px-3 py-1 rounded-full border border-white/10">
                    {job.type}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-white/60 text-sm mb-1">{job.category}</div>
                  <h2 className="text-white text-lg font-medium mb-2">{job.title}</h2>
                  <p className="text-white/60 text-sm">{job.domain}</p>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {job.workMode}
                    </div>
                    <div className="text-white/60">
                      Stipend: {job.stipend}
                    </div>
                  </div>
                  
                  <a 
                    href={job.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/10 hover:bg-white/20 text-white text-sm text-center px-4 py-2 rounded-lg transition-colors"
                  >
                    Download Job Description
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 