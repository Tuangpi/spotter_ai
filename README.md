# Spotter AI Frontend

A small multi-page frontend built as a coding assessment project. The app presents a marketing-style website for a logistics and transportation AI platform, with product navigation for Lens, TMS, Sentinel, Extension, Spotter App, Loan Calculators, and Insights.

## Project Overview

This project focuses on building a clean React application with shared layout components, route-based navigation, and reusable UI cards. The homepage introduces Spotter AI's product ecosystem, while additional routes simulate product and company information pages.

## Features

- Responsive homepage hero section and product highlights
- Shared `Navbar` and `Footer` layout across pages
- Client-side routing with `react-router`
- Reusable card components for product navigation and capability summaries
- Tailwind CSS styling for fast, consistent UI development

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React

## Routes

The app currently includes the following routes:

- `/`
- `/retail`
- `/logistics`
- `/security`
- `/tms`
- `/about-us`
- `/careers`
- `/press`
- `/extension`
- `/spotter_app`
- `/loan_calculators`
- `/insights`

## Current Status

The homepage, shared layout, navigation, and reusable cards are implemented. Several secondary pages are currently simple placeholder screens, which reflects the scope and time-boxing of the assessment rather than a production-complete build.

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Folder Structure

```text
src/
  assets/        Reusable visual assets
  components/    Shared UI components
  constants/     Static configuration such as nav items
  layouts/       App-level layout pieces
  pages/         Route page components
  routes/        Router configuration
```

## What I Focused On

- Clear component separation
- Reusable layout structure
- Simple and readable routing setup
- Fast local development workflow with Vite

## Possible Next Improvements

- Replace placeholder pages with complete product detail content
- Improve accessibility and keyboard navigation for dropdown menus
- Add active states and route-aware behavior across all navigation items
- Add unit/integration tests
- Optimize images and content for production readiness
