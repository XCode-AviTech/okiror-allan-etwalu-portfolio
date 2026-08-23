# Okiror Allan Etwalu — Professional Portfolio

A responsive static portfolio for Okiror Allan Etwalu.

## Included
- Responsive one-page portfolio
- Online recruiter CV page
- Downloadable PDF CV
- Dark/light theme
- Accessible navigation and reduced-motion support
- Project data rendered dynamically from `assets/js/main.js`
- SEO metadata, canonical URL, Open Graph metadata and JSON-LD
- `robots.txt` and `sitemap.xml`
- Contact form that opens the visitor's email client using `mailto:`
- AviTech Solutions integration
- No invented LinkedIn/GitHub URLs

## Deploy
Upload the contents of this folder to GitHub Pages or another static host.

## Before production
1. Replace the canonical and sitemap URLs if the final domain differs.
2. Add verified LinkedIn/GitHub URLs when available.
3. Replace project placeholders with verified screenshots and public URLs.
4. If server-side contact submission is required, connect the form to a secure backend/API.
5. Replace/update the PDF CV whenever the professional CV changes.

## Content notes
- Web development is presented as a personal hobby/practice area, not as the primary professional role.
- Listed projects are locally hosted practice/training projects unless a verified public link is later added.
- Cisco Network Administration Training has been removed from the portfolio.
- AviTech Solutions is presented without a physical office/location claim.

## EmailJS setup

The contact form now uses the official EmailJS browser SDK. EmailJS supports sending from client-side websites without a custom mail server.

Before deployment, edit `assets/js/main.js` and replace:
- `YOUR_EMAILJS_PUBLIC_KEY`
- `YOUR_EMAILJS_SERVICE_ID`
- `YOUR_EMAILJS_TEMPLATE_ID`

Create an EmailJS template with these form variable names:
`name`, `email`, `phone`, `subject`, `message`.

The supplied profile photo is stored at `assets/img/profile.jpg`.

LinkedIn:
https://www.linkedin.com/in/okiror-allan-etwalu
