'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyjW5LLDtME2KG5PB7_FDB6Xd_xBKkgY-GWUwqTTgP0Nrk1JW2pGIPLs69cZoIptpQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full min-h-screen max-w-[1400px] mx-auto">
        {/* Navigation */}
        <nav className="relative flex items-center justify-between px-4 sm:px-8 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Finatic Labs"
              width={150}
              height={150}
              className="opacity-90 w-[120px] sm:w-[216px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-sm text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/#about" className="text-sm text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-sm text-white/80 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/#about" className="text-sm text-white/80 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Form Section */}
        <div className="flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-[600px] bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
            <h1 className="text-3xl font-light text-white mb-8">Join the Waitlist</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/80 mb-2">
                  Name <span className="text-white/60">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/20"
                  placeholder="Lee Robinson"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/80 mb-2">
                  Email <span className="text-white/60">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/20"
                  placeholder="leerob@finaticlabs.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/80 mb-2">
                  Tell us about yourself <span className="text-white/60">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/20 resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-auto px-6 py-2 bg-white/90 hover:bg-white text-black rounded-lg transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm mt-2">
                  Thank you for joining the waitlist! We&apos;ll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm mt-2">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 