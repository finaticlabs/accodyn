'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Don't render on the jobs page
    if (pathname === '/jobs') {
      setShouldRender(false)
      return
    }

    // For other pages, check for custom footer attribute as a fallback
    const hasCustomFooter = document.body.hasAttribute('data-custom-footer')
    setShouldRender(!hasCustomFooter)
  }, [pathname])

  if (!shouldRender) {
    return null
  }

  return (
    <div className="w-full bg-black/40 backdrop-blur-sm">
      <footer className="w-full max-w-[1400px] mx-auto px-8 py-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/flw.png"
              alt="Finatic Labs"
              width={32}
              height={32}
              className="opacity-90"
            />
            <span className="text-white/60 text-sm">© 2025 Finatic Labs. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <span className="text-sm text-white/60">Contact:</span>
            <Link 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@finaticlabs.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              info@finaticlabs.com
            </Link>
            <span className="text-white/60 hidden sm:inline">|</span>
            <Link
              href="tel:+917568867648"
              className="text-sm text-white/60 hover:text-white transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 75688 67648
            </Link>
            <span className="text-white/60 hidden sm:inline">|</span>
            <Link
              href="https://www.linkedin.com/company/finatic-labs/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 