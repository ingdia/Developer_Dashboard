# 🌟 Developer Dashboard

A modern, elegant developer dashboard built with React and Vite, featuring weather information and GitHub statistics integration.



## 📋 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)


## ✨ Features

- **Weather Information**: Real-time weather data with beautiful visual presentation
- **GitHub Statistics**: Display repository statistics and profile information
- **Modern UI**: Clean, responsive design with TailwindCSS
- **React Router**: Smooth navigation between different sections
- **Lightning Fast**: Built with Vite for optimal performance
- **React Compiler**: Enhanced performance with the latest React compiler
- **Lucide Icons**: Beautiful, consistent iconography throughout the app

## 📸 Screenshots

_Coming soon - Add your screenshots here!_

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ingdia/Developer_Dashboard.git
   cd Developer_Dashboard/dev-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 💻 Usage

### Development

Run the development server with hot module replacement:

```bash
npm run dev
```

### Build for Production

Create a production-ready build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
dev-dashboard/
├── public/              # Static assets
│   └── vite.svg        # Vite logo
├── src/
│   ├── assets/         # Images and static files
│   │   ├── image.png
│   │   └── react.svg
│   ├── components/     # Reusable React components
│   │   ├── GitHubCard.jsx
│   │   ├── Navbar.jsx
│   │   └── WeatherCard.jsx
│   ├── dashboard/      # Dashboard pages
│   │   └── Home.jsx
│   ├── App.css         # Global styles
│   ├── App.jsx         # Main App component
│   ├── index.css       # Base styles
│   └── main.jsx        # Entry point
├── .gitignore
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── README.md           # This file
└── vite.config.js      # Vite configuration
```

## 🛠 Technologies Used

### Core

- **React 19.1.1** - Latest React with improved performance
- **Vite 7.1.7** - Next-generation frontend build tool
- **React Router DOM 7.9.4** - Declarative routing for React

### Styling

- **TailwindCSS 4.1.16** - Utility-first CSS framework
- **Lucide React 0.548.0** - Beautiful icon library
- **Autoprefixer & PostCSS** - CSS processing

### Development Tools

- **ESLint** - JavaScript linting utility
- **Babel Plugin React Compiler** - React performance optimizations
- **TypeScript Types** - Type definitions for React

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Configuration

### Vite Configuration

The project uses Vite's default configuration with React plugin support. Customize build options in `vite.config.js`.

### TailwindCSS

TailwindCSS is configured through the Vite plugin. Modify styles directly in component classes or extend the config for custom utilities.

### ESLint

ESLint rules are configured for React best practices. Customize rules in `eslint.config.js`.


