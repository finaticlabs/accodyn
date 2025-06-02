# Finatic Labs Website

This is the official website for Finatic Labs, a comprehensive software suite for NBFCs. The website is built using Next.js and features modern design with responsive layouts.

## Changelog

### Version 2.9.5 (Latest - Pending Approval)
- Updated website content to reflect AI focus:
  - Updated main heading and hero text
  - Enhanced mission and vision statements
  - Updated metadata and SEO content
  - Refined company description
  - Maintained responsive design across all changes

### Version 2.9.4 (Latest - Pending Approval)
- Removed Tools page and its components:
  - Deleted entire tools directory and EMI calculator
  - Removed tools section from navigation menu
  - Updated sitemap.xml to remove tools entries
  - Updated robots.txt to remove tools paths
  - Simplified website structure and navigation

### Version 2.9.3 (Latest - Pending Approval)
- Enhanced footer responsiveness:
  - Improved contact section layout on mobile devices
  - Added flex-wrap for better content flow
  - Adjusted spacing and alignment for small screens
  - Hide dividers on mobile for cleaner look
  - Optimized contact information display across all devices

### Version 2.9.2 (Latest - Pending Approval)
- Added clickable phone number to footer:
  - Added phone number +91 75688 67648
  - Implemented click-to-call functionality
  - Added phone icon for better visibility
  - Enhanced contact options in footer
  - Maintained consistent styling with existing elements

### Version 2.9.1 (Latest - Pending Approval)
- Removed founder section from About page:
  - Simplified About page content
  - Removed founder profile and biography
  - Maintained core company information
  - Preserved page layout and styling
  - Enhanced focus on company mission and values

### Version 2.9.0 (Latest - Pending Approval)
- Removed Jobs page from the website:
  - Deleted the entire jobs page and its components
  - Simplified website structure
  - Removed job listings functionality
  - Streamlined navigation without jobs section

### Version 2.8.3 (Latest - Pending Approval)
- Fixed duplicate footer issue on Jobs page:
  - Implemented route-based footer detection using Next.js usePathname hook
  - Added explicit path check for Jobs page to prevent double footers
  - Added fallback for attribute-based footer handling
  - Improved footer component to handle multiple detection methods
  - Enhanced user experience by ensuring only one footer appears per page

### Version 2.8.2 (Latest - Pending Approval)
- Fixed Vercel deployment issues:
  - Removed invalid page export that was causing build failures
  - Changed footer detection method to use body attributes
  - Improved client-side detection of pages with custom footers
  - Enhanced cleanup on component unmounting
  - Maintained same functionality with Next.js compliant implementation

### Version 2.8.1 (Latest - Pending Approval)
- Enhanced footer implementation:
  - Added conditional rendering to global footer component
  - Preserved custom footer on Jobs page
  - Implemented noFooterLayout function for pages with custom footers
  - Added DOM detection to prevent duplicate footers
  - Improved user experience with specialized job application footer
  - Maintained consistent branding across the site

### Version 2.8.0 (Latest - Pending Approval)
- Added global footer to all pages:
  - Created reusable Footer component
  - Added footer to the root layout so it appears on every page
  - Removed duplicate footer from the home page
  - Consistent styling with the original home page footer
  - Enhanced site-wide navigation with links to contact and LinkedIn
  - Improved user experience with consistent branding across all pages

### Version 2.7.0 (Pending Approval)
- Updated Credit Kit features in Products page:
  - Removed previous Credit Assessment and Loan Processing features
  - Added new focus on technological aspects of the product:
    - Advanced AI Engine with machine learning capabilities
    - Secure Database Architecture with redundant backups
    - Robust Security Framework with encryption and authentication features
  - Enhanced product value proposition with technology-focused benefits
  - Maintained consistent design and layout

### Version 2.6.1 (Pending Approval)
- Enhanced job card visibility on Jobs page:
  - Increased card background opacity from 40% to 60%
  - Improved backdrop blur effect for better content readability
  - Added subtle shadow effect for depth and emphasis
  - Increased text contrast with higher opacity values
  - Enhanced button visibility with stronger background color
  - Improved overall visual hierarchy and focus on job details

### Version 2.4.1
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
