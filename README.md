# Finatic Labs Website

This is the official website for Finatic Labs, a comprehensive software suite for NBFCs. The website is built using Next.js and features modern design with responsive layouts.

## Changelog

### Version 2.4.1 (Latest)
- Extended background video to Waitlist and Jobs pages:
  - Added background video with 20% opacity to both pages
  - Implemented consistent gradient overlay across all pages
  - Added proper z-indexing to ensure content visibility
  - Enhanced visual consistency throughout the entire website
  - Improved user experience with cohesive design language

### Version 2.4.0
- Enhanced About page visual design:
  - Added background video with reduced opacity (20%)
  - Implemented gradient overlay for better text readability
  - Ensured consistent design language with home page
  - Improved overall visual appeal while maintaining content focus
  - Added proper z-indexing to maintain content hierarchy

### Version 2.3.9
- Further improved About Us section positioning:
  - Significantly increased vertical spacing with larger top margin
  - Expanded top padding for better visual separation
  - Ensured section appears fully in viewport when scrolled to
  - Optimized for better scrolling experience across all devices

### Version 2.3.8
- Improved About Us section positioning on home page:
  - Added more vertical spacing before and after the section
  - Increased padding at top and bottom
  - Added margin to ensure section is fully visible when scrolled to
  - Enhanced overall scrolling experience and section visibility

### Version 2.3.7
- Fixed build errors for Vercel deployment:
  - Resolved unescaped entities in About page
  - Replaced apostrophes with &apos; HTML entities
  - Fixed ESLint react/no-unescaped-entities errors
  - Ensured successful build process completion

### Version 2.3.6
- Added Vercel deployment configuration:
  - Created vercel.json configuration file
  - Specified Next.js as the framework
  - Configured build, install and development commands
  - Set output directory to .next
  - Optimized for Vercel deployment environment

### Version 2.3.5
- Enhanced user engagement on waitlist page:
  - Added exclamation mark to "Join the Waitlist!" heading
  - Improved call-to-action visibility and friendliness
  - Maintained consistent styling and responsiveness

### Version 2.3.4
- Improved About Us page consistency:
  - Left-aligned the "Our Founder" heading to match other section headings
  - Enhanced visual consistency across all sections
  - Maintained vertical layout with centered profile icon

### Version 2.3.3
- Redesigned About Us page founder section:
  - Changed layout to vertical format with photo icon at top
  - Centered profile icon and section heading
  - Placed all text content below the photo
  - Improved overall visual hierarchy and reading flow
  - Enhanced mobile-first layout that works well across all devices

### Version 2.3.2
- Improved About Us page styling:
  - Center-aligned the founder profile icon for better visual balance
  - Left-aligned founder text content for improved readability
  - Enhanced overall layout consistency
  - Maintained responsive design across different screen sizes

### Version 2.3.1
- Enhanced About Us page:
  - Added "Our Founder" section with Girendra Trivedi's profile
  - Improved layout with dedicated founder card
  - Added comprehensive professional background and expertise
  - Maintained consistent styling with other page sections

### Version 2.3
- Added dedicated About Us page:
  - Created a new `/about` route with enhanced content
  - Updated navigation to link to the dedicated page instead of home page section
  - Maintained the About Us section on the home page with a "Learn more" link
  - Updated robots.txt to include the new page
  - Added the page to sitemap.xml for SEO
  - Improved user experience with smooth animations

### Version 2.2
- Site structure simplification:
  - Removed Features page completely
  - Updated navigation menus (both mobile and desktop)
  - Updated robots.txt to remove features page references
  - Updated sitemap.xml to remove features page entry
  - Streamlined the navigation experience

### Version 2.1.3
- Enhanced EMI Calculator amortization table:
  - Improved visual separation between yearly entries
  - Added year indicators for better readability
  - Implemented smooth scrolling when viewing the table
  - Enhanced table styling with hover effects
  - Added visual hierarchy for year-end rows

### Version 2.1.2
- Enhanced EMI Calculator functionality:
  - Added amortization table feature for loan terms up to 3 years
  - Improved table layout with monthly breakdowns
  - Added principal and interest distribution per installment
  - Enhanced mobile responsiveness for table view
- Improved footer and social integration:
  - Added LinkedIn social media link
  - Updated copyright year to 2025
  - Enhanced footer layout and responsiveness
- Technical improvements:
  - Improved hydration handling for development environment
  - Enhanced VS Code integration management
  - Optimized client-side rendering consistency

### Version 2.1.1
- Fixed critical redirect and deployment issues:
  - Resolved infinite redirect loop on Vercel deployment
  - Updated CSP headers for Vercel compatibility
  - Improved www to non-www redirect logic
  - Fixed hostname handling in middleware
  - Added protocol and URL parsing safety checks
  - Optimized security headers for production

### Version 2.1.0
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
