# Finatic Labs Website

This is the official website for Finatic Labs, a comprehensive software suite for NBFCs. The website is built using Next.js and features modern design with responsive layouts.

## Changelog

### Version 2.1.0 (Latest)
- Enhanced security measures to prevent DDoS attacks:
  - Implemented rate limiting (100 requests per minute per IP)
  - Added security headers (HSTS, CSP, XSS Protection)
  - Improved request filtering and validation
  - Added DDoS protection layer
  - Implemented retry-after mechanism for rate-limited requests
  - Added Content Security Policy (CSP) headers
  - Enhanced cross-origin security policies

### Version 2.0.3
- Fixed SEO redirect issues:
  - Added middleware for consistent domain handling
  - Implemented 301 redirects from www to non-www
  - Improved URL canonicalization
  - Fixed Google Search Console indexing issues

### Version 2.0.2
- Added robots.txt for improved search engine crawling:
  - Set global crawl permissions
  - Added sitemap reference
  - Located at /public/robots.txt

### Version 2.0.1
- Added XML sitemap for improved SEO:
  - Included all major routes with priorities
  - Set appropriate change frequencies
  - Added lastmod dates
  - Located at /public/sitemap.xml

### Version 2.0
- Added EMI Calculator tool with the following features:
  - Loan amount input with preset buttons (1L to 1Cr)
  - Interest rate slider (0-40%)
  - Loan term input with months/years toggle
  - Real-time EMI calculation
  - Total interest and total amount display
  - Smooth slider interactions
  - Input validation and formatting
- Updated navigation to include Tools dropdown
- Renamed Services section to Tools for better clarity
- Enhanced UI/UX with smooth transitions and responsive design

### Version 1.1
- Added Jobs page with:
  - Multiple internship position listings
  - Downloadable job descriptions
  - Application instructions
- Enhanced About Us section with:
  - Company values and mission
  - Team highlights
  - Animated sections
- Added Waitlist form with:
  - Name, email, and message fields
  - Form validation
  - Success/error notifications
  - Google Sheets integration for responses
- Improved mobile responsiveness
- Added loading states for better UX

### Version 1.0
- Initial website launch with:
  - Modern, responsive landing page
  - Hero section with video background
  - Navigation menu with mobile support
  - Features preview section
  - About Us section
  - Basic SEO optimization
  - Contact information
  - Footer with copyright and links
