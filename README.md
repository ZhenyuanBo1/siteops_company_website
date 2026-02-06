# SiteOps Technologies

Enterprise solutions for AI-powered communication, analytics, and site management.

## About

SiteOps Technologies is a landing page for an enterprise SaaS platform offering three core products:

- **SiteOps Voice** - AI-powered calling solution for automated customer interactions, outreach, and support
- **SiteOps Analysis** - Advanced analytics platform with real-time dashboards, predictive modeling, and reporting
- **SiteOps Management** - Centralized operations management for teams, workflows, assets, and resources

## Tech Stack

- **React** 18
- **Vite** 5
- **JavaScript** (JSX)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd siteopstech

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the development server at `http://localhost:5173`.

### Build

```bash
npm run build
```

Build output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
siteopstech/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Products.jsx     # Product cards
│   │   ├── Features.jsx     # Features list
│   │   ├── CTA.jsx          # Call-to-action section
│   │   └── Footer.jsx       # Site footer
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). Any push to the `main` branch triggers an automatic production deployment.
